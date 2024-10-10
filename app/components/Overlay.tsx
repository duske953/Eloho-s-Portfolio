import { KeyboardEventHandler, MouseEventHandler } from 'react';

export default function Overlay({
  renderOverlayAction,
}: {
  renderOverlayAction: MouseEventHandler<HTMLDivElement>;
}) {
  return (
    <div
      onClick={renderOverlayAction}
      aria-label="close the side bar"
      tabIndex={0}
      role="button"
      onKeyDown={
        renderOverlayAction as unknown as KeyboardEventHandler<HTMLDivElement>
      }
      className="fixed top-0 left-0 w-full h-full z-10"
    >
      &nbsp;
    </div>
  );
}
