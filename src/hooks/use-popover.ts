import * as React from 'react';

interface PopoverController<T> {
  anchorRef: React.MutableRefObject<T | null>;
  handleOpen: () => void;
  handleClose: () => void;
  handleToggle: () => void;
  open: boolean;
}

export function usePopover<T = HTMLElement>(): PopoverController<T> {
  // Tạo một tham chiếu tới phần tử DOM
  const anchorRef = React.useRef<T | null>(null);

  // Trạng thái mở/đóng
  const [open, setOpen] = React.useState<boolean>(false);

  // Hàm mở popover
  const handleOpen = React.useCallback(() => {
    setOpen(true);
  }, []);

  // Hàm đóng popover
  const handleClose = React.useCallback(() => {
    setOpen(false);
  }, []);

  // Hàm chuyển đổi trạng thái
  const handleToggle = React.useCallback(() => {
    setOpen((prevState) => !prevState);
  }, []);

  // Trả về các hàm và trạng thái trong một đối tượng cố định
  return React.useMemo(
    () => ({
      anchorRef,
      handleOpen,
      handleClose,
      handleToggle,
      open,
    }),
    [open, handleOpen, handleClose, handleToggle]
  );
}
