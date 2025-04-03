import { Button } from "antd";
import styles from "./Contacts.module.scss";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { useState } from "react";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

function Contacts() {
  const [open, setOpen] = useState<boolean>(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <Button
        onClick={handleOpen}
        className={styles.contacts__btn}
        type="primary"
      >
        Контакты
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Наши контакты
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Тел.: +375298146364 Email: AlKhram@gmail.com
          </Typography>
        </Box>
      </Modal>
    </>
  );
}
export default Contacts;
