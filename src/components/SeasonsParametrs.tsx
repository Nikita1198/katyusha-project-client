import * as React from "react";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import SelectSeeding from "./fields/SelectSeeding";
import DateOfGermination from "./fields/DataPicker";
import CustomFieldTwo from "./fields/CustomFieldTwo";
import store from "../stores/calculationStore";
import { observer } from 'mobx-react-lite';
import { Box, Typography } from "@mui/material";

export default observer(function SeasonsParametrs() {
    const step2Data = store.getStep2();

    return (
        <>
            <Box>
                <Typography variant="h6" sx={{ mb: 2 }}>
                    Осень
                </Typography>
                <Grid container spacing={4}>
                    <Grid item xs={12} sm={6}>
                        <SelectSeeding />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <DateOfGermination />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <CustomFieldTwo
                            id={"complexFertilizers"}
                            label={"Норма сложных удобрений, кг/га"}
                            max={250}
                            min={50}
                            step={10}
                            defaultValue={step2Data.complexFertilizers}
                            units={"кг/га"}
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <CustomFieldTwo
                            id={"ammoniumNitrate"}
                            label={"Норма аммиачной селитры, кг/га"}
                            max={120}
                            min={0}
                            step={10}
                            defaultValue={step2Data.ammoniumNitrate}
                            units={"кг/га"}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            label="Развитие с осени"
                            id='comment'
                            multiline
                            required
                            fullWidth
                            rows={8}
                            defaultValue={step2Data.comment}
                            InputLabelProps={{ shrink: true }}
                            placeholder="Укажите развитие посевов с оcени"
                            onChange={(e) => {
                                store.updateStep2Field(e.target.id, e.target.value);
                            }}
                            inputProps={{
                                style: {
                                    height: "100px",
                                },
                            }}
                        />
                    </Grid>
                    {store.plannedFirstYield.display && (
                        <Grid item xs={12}>
                            <Typography variant="body2">
                                Предварительная урожайность c Осени: {store.plannedFirstYield.value} ц/га
                            </Typography>
                        </Grid>
                    )}
                </Grid>
            </Box>
            <Box sx={{ mt: 3 }}>
                <Typography variant="h6" sx={{ mb: 2 }}>
                    Весна
                </Typography>
                <Grid container spacing={4}>
                    <Grid item xs={12} sm={6}>
                        <CustomFieldTwo
                            id={'nitrateNitrogen'}
                            label={"Доза нитратного азота в почве (слой 0-40см)"}
                            max={200}
                            min={0}
                            step={20}
                            defaultValue={step2Data.nitrateNitrogen}
                            units={"кг/га"}
                        />
                    </Grid>
                </Grid>
            </Box>
        </>
    );
})
