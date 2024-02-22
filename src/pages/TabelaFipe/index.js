import { observer } from "mobx-react-lite";
import { Typography } from "@mui/material";
import Container from "@mui/material/Container";
import { Box } from "@mui/material";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import MenuItem from "@mui/material/MenuItem";
import React, { useEffect } from "react";
import Select from "@mui/material/Select";
import Button from "@mui/material/Button";
import "./TabelaFipe.css";
import { styled } from "@mui/material/styles";
import { purple } from "@mui/material/colors";
import Stack from "@mui/material/Stack";
import Chip from "@mui/material/Chip";

import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import Slide from "@mui/material/Slide";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const TabelaFipe = observer((props) => {
  const [marcaId, setMarcaId] = React.useState("");
  const [modelo, setModelo] = React.useState("");
  const [ano, setAno] = React.useState("");
  const [openDilog, setOpenDilog] = React.useState(false);

  useEffect(() => {
    props.store.searchVehicleBrand();
  }, [props]);

  const handleMarcaChange = (event) => {
    setMarcaId(event.target.value);
    props.store.searchVehicleModel(event.target.value);
    setModelo("");
    setAno("");
  };

  const handleModeloChange = (event) => {
    setModelo(event.target.value);
    props.store.searchVehicleYear(marcaId, event.target.value);
    setAno("");
  };

  const handleAnoChange = (event) => {
    setAno(event.target.value);
  };

  const handleClickOpenDialog = () => {
    props.store.returnAllInfosToSearch(marcaId, modelo, ano);
    setOpenDilog(true);
  };

  const handleCloseDialog = () => {
    setOpenDilog(false);
  };

  const ColorButton = styled(Button)(({ theme }) => ({
    color: theme.palette.getContrastText(purple[500]),
    backgroundColor: purple[500],
    "&:hover": {
      backgroundColor: purple[700],
    },
  }));

  return (
    <>
      <Container maxWidth="sm">
        <div className="TabelaFipe">
          <Typography textAlign="center" variant="h5" component="h5">
            Tabela Fipe
          </Typography>
          <Typography textAlign="center" mb={2} variant="h6" component="h6">
            Consulta o valor de um veículo de forma gratuita
          </Typography>
          <Box
            sx={{
              p: 3,
              borderRadius: 2,
              bgcolor: "background.default",
              display: "grid",
              gridTemplateColumns: { md: "1fr" },
              gap: 1,
            }}
          >
            <FormControl fullWidth>
              <InputLabel id="demo-controlled-open-select-label">
                Marca
              </InputLabel>
              <Select
                labelId="demo-controlled-open-select-label"
                id="demo-controlled-open-select"
                value={marcaId}
                label="Marca"
                onChange={handleMarcaChange}
              >
                {props.store.resultSearchVehicleBrand.map((item) => (
                  <MenuItem
                    key={item.index}
                    value={item.codigo}
                    name={item.nome}
                  >
                    {item.nome}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
            <FormControl fullWidth disabled={marcaId ? false : true}>
              <InputLabel id="demo-controlled-open-select-label">
                Modelo
              </InputLabel>
              <Select
                labelId="demo-controlled-open-select-label"
                id="demo-controlled-open-select"
                value={modelo}
                label="Modelo"
                onChange={handleModeloChange}
              >
                {props.store.resultSearchVehicleModel.modelos.map((item) => (
                  <MenuItem key={item.index} value={item.codigo}>
                    {item.nome}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
            <FormControl fullWidth disabled={modelo ? false : true}>
              <InputLabel id="demo-controlled-open-select-label">
                Ano
              </InputLabel>
              <Select
                labelId="demo-controlled-open-select-label"
                id="demo-controlled-open-select"
                value={ano}
                label="Ano"
                onChange={handleAnoChange}
              >
                {props.store.resultSearchVehicleYear.map((item) => (
                  <MenuItem key={item.index} value={item.codigo}>
                    {item.nome}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
            <Stack
              spacing={1}
              direction="row"
              justifyContent="center"
              alignItems="center"
              mt={1}
            >
              <ColorButton
                disabled={ano ? false : true}
                variant="contained"
                onClick={handleClickOpenDialog}
              >
                Consultar preço
              </ColorButton>
            </Stack>
          </Box>
        </div>
      </Container>

      <Dialog
        fullWidth={true}
        maxWidth={false}
        open={openDilog}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleCloseDialog}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle textAlign="center">{`Tabela Fipe: Preço do ${props.store.resultAllInfosToSearch.Marca} ${props.store.resultAllInfosToSearch.Modelo} ${props.store.resultAllInfosToSearch.AnoModelo}`}</DialogTitle>
        <DialogContent>
          <Stack
            spacing={1}
            direction="row"
            justifyContent="center"
            alignItems="center"
            mb={2}
          >
            <Chip
              label={props.store.resultAllInfosToSearch.Valor}
              color="success"
              size="large"
            />
          </Stack>
          <Typography
            textAlign="center"
            variant="caption"
            display="block"
            gutterBottom
          >
            Esse é o preço da compra do veiculo
          </Typography>
        </DialogContent>
      </Dialog>
    </>
  );
});
export default TabelaFipe;
