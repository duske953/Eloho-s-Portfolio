export default function socialPreviewGuide(platform: string) {
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Here's your fix</title>
</head>
<body style="margin:0;padding:0;background:#ffffff;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Helvetica,Arial,sans-serif;">

  <table width="100%" cellpadding="0" cellspacing="0" border="0">
    <tr>
      <td align="center" style="padding:40px 16px;">

        <table width="100%" cellpadding="0" cellspacing="0" border="0" style="max-width:520px;">

          <!-- Logo -->

          <!-- Body -->
          <tr>
            <td style="font-size:15px;line-height:26px;color:#1A1A1A;">
              <p style="margin:0 0 16px 0;">Hello there</p>
              <p style="margin:0 0 16px 0;">Your guide is attached. It walks you through exactly how to fix your social preview on <strong>${platform} site</strong>, step by step.</p>
              <p style="margin:0 0 16px 0;">Once you are done, come back and run your URL through the checker to see the difference.</p>
              <p style="margin:0 0 32px 0;">
                <a href="https://eloho.dev/freebies/social-preview"
                   style="color:#1B6FFF;text-decoration:none;font-weight:500;">
                  eloho.dev/freebies/social-preview
                </a>
              </p>
              <p style="margin:0;">Eloho</p>
            </td>
          </tr>

          <!-- Divider -->
          <tr>
            <td style="padding-top:40px;padding-bottom:16px;">
              <div style="height:1px;background:#E0E0E0;"></div>
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="font-size:12px;color:#9E9E9E;line-height:18px;">
              You asked for this guide at
              <a href="https://eloho.dev/freebies/social-preview"
                 style="color:#9E9E9E;">eloho.dev/freebies/social-preview</a>.
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>

</body>
</html>`;
}
