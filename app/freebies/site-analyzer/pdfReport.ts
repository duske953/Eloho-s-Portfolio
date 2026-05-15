import { AnalysisData, AnalysisItem } from './types';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
export default async function pdfReport(
  data: AnalysisData,
  url: string,
  element: HTMLDivElement,
) {
  element.style.position = 'absolute';
  element.style.left = '-9999px';
  element.style.top = '0';
  element.style.width = '800px';
  element.style.padding = '60px';
  element.style.backgroundColor = '#ffffff';
  element.style.color = '#000000';

  // Set Font to Rubik (Fallback to sans-serif)
  element.style.fontFamily = "'Rubik', 'Segoe UI', Arial, sans-serif";

  // Branding / Header
  const header = document.createElement('div');
  header.style.marginBottom = '40px';
  header.style.display = 'flex';
  header.style.justifyContent = 'space-between';
  header.style.alignItems = 'center';
  header.style.borderBottom = '1px solid #000';
  header.style.paddingBottom = '20px';

  header.innerHTML = `
       <div style="display: flex; align-items: center; gap: 10px;">
         <img alt="Eloho kennedy's logo" src="/icon1.png" style="height: 30px; width: auto;" />
       </div>
       <div style="text-align: right;">
         <div style="font-size: 12px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.05em;">Site Audit</div>
         <div style="font-size: 12px; color: #444;">${new Date().toLocaleDateString()}</div>
       </div>
     `;
  element.appendChild(header);

  // Site Info
  const siteInfo = document.createElement('div');
  siteInfo.style.marginBottom = '40px';
  siteInfo.innerHTML = `
       <div style="font-size: 12px; text-transform: uppercase; color: #666; margin-bottom: 4px;">Prepared for</div>
       <div style="font-size: 20px; font-weight: 500;">${url}</div>
     `;
  element.appendChild(siteInfo);

  const allItems: AnalysisItem[] = [
    data.seo.hasTitle,
    data.seo.hasDescription,
    data.seo.hasKeywords,
    data.seo.hasCanonical,
    data.seo.hasFavicon,
    data.seo.og.hasOgTitle,
    data.seo.og.hasOgDescription,
    data.seo.og.hasOgImage,
    data.seo.twitter.hasTwitterCard,
    data.seo.twitter.hasTwitterTitle,
    data.headings.hasH1,
    data.headings.multipleH1,
    data.headings.h2Count,
    data.links?.brokenLinks,
    data.images.missingAlt,
    data.images?.brokenImages,
  ].filter((item): item is AnalysisItem => item !== null);

  const critical = allItems.filter((i) => i.severity === 'critical');
  const warnings = allItems.filter((i) => i.severity === 'warning');
  const passed = allItems.filter((i) => i.severity === 'pass');

  const issuesSection = document.createElement('div');
  issuesSection.style.marginBottom = '40px';

  const badIssues = [...critical, ...warnings];

  if (badIssues.length > 0) {
    issuesSection.innerHTML =
      '<div style="font-size: 14px; font-weight: 600; text-transform: uppercase; margin-bottom: 20px; border-bottom: 1px solid #eee; padding-bottom: 8px;">Areas for Improvement</div>';
    badIssues.forEach((item) => {
      const itemDiv = document.createElement('div');
      itemDiv.style.marginBottom = '15px';
      itemDiv.innerHTML = `
           <div style="font-size: 14px; font-weight: 500;">• ${item.title}</div>
           <div style="font-size: 12px; color: #444; margin-top: 2px; padding-left: 10px;">${item.message}</div>
         `;
      issuesSection.appendChild(itemDiv);
    });
  }
  element.appendChild(issuesSection);

  // Success Section
  const successSection = document.createElement('div');
  successSection.style.marginBottom = '40px';

  if (passed.length > 0) {
    successSection.innerHTML =
      '<div style="font-size: 14px; font-weight: 600; text-transform: uppercase; margin-bottom: 20px; border-bottom: 1px solid #eee; padding-bottom: 8px;">What is working well</div>';
    const grid = document.createElement('div');
    grid.style.display = 'grid';
    grid.style.gridTemplateColumns = '1fr 1fr';
    grid.style.gap = '10px';

    passed.forEach((item) => {
      const itemDiv = document.createElement('div');
      itemDiv.style.fontSize = '12px';
      itemDiv.style.color = '#222';
      itemDiv.innerHTML = `✓ ${item.title}`;
      grid.appendChild(itemDiv);
    });
    successSection.appendChild(grid);
  }
  element.appendChild(successSection);

  // Contact / Footer
  const footer = document.createElement('div');
  footer.style.marginTop = 'auto';
  footer.style.paddingTop = '40px';
  footer.style.display = 'flex';
  footer.style.justifyContent = 'space-between';
  footer.style.alignItems = 'flex-end';
  footer.style.fontSize = '12px';

  footer.innerHTML = `
       <div style="color: #444;">
         <div style="font-weight: 600; color: #000; margin-bottom: 4px;">Need help fixing these?</div>
         <div>Email: web@eloho.pro</div>
         <div>Web: eloho.pro</div>
       </div>
       <div style="color: #999;">
         © ${new Date().getFullYear()} Eloho Kennedy
       </div>
     `;
  element.appendChild(footer);

  document.body.appendChild(element);

  try {
    const canvas = await html2canvas(element, {
      useCORS: true,
      logging: false,
    });

    // Use JPEG with 0.7 quality instead of PNG to drastically reduce size
    const imgData = canvas.toDataURL('image/jpeg', 0.7);
    const pdf = new jsPDF({
      orientation: 'p',
      unit: 'mm',
      format: 'a4',
      compress: true, // Enable internal PDF compression
    });

    const imgProps = pdf.getImageProperties(imgData);
    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;

    pdf.addImage(imgData, 'JPEG', 0, 0, pdfWidth, pdfHeight, undefined, 'FAST');

    const pdfBase64 = pdf.output('datauristring').split(',')[1];
    return pdfBase64;
  } catch (err) {
    throw new Error('Something went wrong');
  }
}
