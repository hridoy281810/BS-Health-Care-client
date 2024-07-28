import { Card, Typography, Grid, Box, CardHeader, Container, MenuItem, SelectChangeEvent, Stack, TextField, FormControl } from '@mui/material';
import styled from "@emotion/styled";
import { format } from 'date-fns';
import { ReactNode, useCallback, useEffect, useState } from "react";
import image from '../../../../../../assets/images/familyOnBeach.png';
import Image from 'next/image';
import DeleteConfirmDialog from './moda';
import ImageGallery from 'react-image-gallery';

import 'react-image-gallery/styles/css/image-gallery.css'; // Import CSS for styling
import InputLabel from '@mui/material/InputLabel';
import Label from './batge';
import Select from '@mui/material/Select';
// npm i --save-dev @types/react-image-gallery
const deposit = {
    "id": "fc8b9741-c27e-495c-ac33-92e28d791ab7",
    "depositType": "E-Transfer",
    "date": "2024-07-15T05:39:09.197Z",
    "amount": 2000,
    "status": "Pending",
    "image": "https://i.ibb.co/hR8LVPS/3720926.jpg",
    "checkNo": "1234",
    "ownAccountNo": "12345tsdfg",
    "bankName": "sdfg",
    "createdAt": "2024-07-14T23:39:52.339Z",
    "updatedAt": "2024-07-14T23:39:52.339Z",
    "investorName": "Investor A"
};

interface StyleInformationBoxProps {
    theme?: any;
}
const StyleInformationBox = styled(Box)<StyleInformationBoxProps>(({ theme }) => ({
    borderRadius: theme.spacing(1),
    width: "45%", // Change this to fit two items per row
    padding: "8px 16px",
    "& p": {
        fontWeight: 600
    }
}));

const DepositHistoryDetailsPage = () => {
    const [status, setStatus] = useState(deposit?.status || "")
    const [showSaveModal, setShowSaveModal] = useState(false);
    const [currentStatus, setCurrentStatus] = useState(deposit?.status);

    const handleChangeStatus = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
        setCurrentStatus(event.target.value);
    }, []);
    useEffect(() => {
        if (deposit) {
            setStatus(deposit?.status);
        }
    }, [deposit]);

    const handleChange = async (event: SelectChangeEvent<string>, child: ReactNode) => {
        const newStatus = event.target.value as string;
        setStatus(newStatus);
        setShowSaveModal(true);
    };
    const handleConfirmSave = async () => {
        try {
            setShowSaveModal(false);
        } catch (error) {
            console.error('Error saving status:', error);
        }
    };

    const handleCancelSave = () => {
        setStatus(deposit?.status || '');
        setShowSaveModal(false);
    };

    function fDate(date: Date | string | number | null | undefined, newFormat?: string) {
        const fm = newFormat || 'dd MMM yyyy';
        return date ? format(new Date(date), fm) : '';
    }
    const images = [
        {
            original: deposit.image,
            description: 'Deposit Image'
        }
    ];
    // Format amount to currency
    const formatToBangladeshCurrency = (amount: number) => {
        return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'BDT' }).format(amount);
    };

    return (
        <Container maxWidth="md" sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
            <Card>
                <CardHeader
                    sx={{
                        paddingLeft: 6,
                        display: 'flex',
                        justifyContent: 'space-between',
                    }}
                    titleTypographyProps={{ variant: 'h5' }}
                    title="Details"
                    action={
                        <Box sx={{ display: 'flex', alignItems: 'center' }}>
                        
                            <FormControl sx={{ m: 1, minWidth: 148, maxWidth: 300 }}>
                            <InputLabel shrink htmlFor="select-multiple-native">
                               Change Status
                            </InputLabel>
                            <Select
                                value={status === 'Pending' ? 'Pending' : status}
                                onChange={handleChange}
                                label="Change Status"
                                sx={{
                                    marginRight: 4,
                                    maxHeight: '40px',
                                }}
                              
                                inputProps={{
                                  id: 'select-multiple-native',
                                }}
                            >
                                {status === 'Pending' && (
                                    <MenuItem value="Pending" disabled>
                                        Pending
                                    </MenuItem>
                                )}
                                <MenuItem value="Approve">Approve</MenuItem>
                                <MenuItem value="Rejected">Rejected</MenuItem>
                            </Select>
                            </FormControl>
                            <TextField
                                fullWidth
                                select
                                label="Status"
                                value={currentStatus}
                                onChange={handleChangeStatus}
                                sx={{
                                    maxWidth: 160,
                                }}
                            >
                                {currentStatus === 'Pending' && (
                                    <MenuItem value="Pending" disabled>
                                        Pending
                                    </MenuItem>
                                )}
                                <MenuItem value="Approve">Approve</MenuItem>
                                <MenuItem value="Rejected">Rejected</MenuItem>

                            </TextField>
                        </Box>
                    }
                />
                {(deposit?.depositType === 'Cash' || deposit?.depositType === 'E-Transfer') && (<>
                    <Typography sx={{
                        paddingLeft: 6,
                        marginBottom: 2
                    }} variant='h6' component="p"  >
                        Image
                    </Typography>
                    {/* <Box paddingLeft={6}>
                      <Image src={image}
                            height={150}
                            width={300}
                            alt='dfgd'
                        />
                      </Box> */}
                    <Box paddingLeft={6} sx={{ width: 300 }}>
                        <ImageGallery  items={images} showPlayButton={false} showFullscreenButton={true} sizes={20} />
                    </Box>
                </>)}
                <Grid container spacing={2} my={1}>
                    <Grid item xs={12} md={6}>
                        <Typography sx={{
                            paddingLeft: 6
                        }} variant="h6" component="p" mb={2}>
                            Basic Information:
                        </Typography>
                        <Grid container spacing={2} paddingLeft={6} paddingBottom={4}>
                            <Grid item xs={12} sx={{ display: 'flex', flexWrap: 'wrap', gap: '16px' }}>
                                <StyleInformationBox>
                                    <Typography color='gray' style={{
                                        fontSize: '14px',
                                        fontWeight: "bold"
                                    }}>
                                        Deposit Type:
                                    </Typography>
                                    <Typography style={{
                                        fontSize: '14px',
                                    }}>
                                        {deposit?.depositType}
                                    </Typography>
                                </StyleInformationBox>
                                <StyleInformationBox>
                                    <Typography color='gray' style={{
                                        fontSize: '14px',
                                        fontWeight: "bold"
                                    }}>
                                        Date:
                                    </Typography>
                                    <Typography style={{
                                        fontSize: '14px',
                                    }}>
                                        {fDate(deposit?.date)}
                                    </Typography>
                                </StyleInformationBox>
                            </Grid>
                            <Grid item xs={12} sx={{ display: 'flex', flexWrap: 'wrap', gap: '16px' }}>
                                <StyleInformationBox>
                                    <Typography color='gray' style={{
                                        fontSize: '14px',
                                        fontWeight: "bold"
                                    }}>
                                        Amount:
                                    </Typography>
                                    <Typography style={{
                                        fontSize: '14px',
                                    }}>
                                        {/* {deposit?.amount} Tk */}
                                        {formatToBangladeshCurrency(deposit?.amount)}
                                    </Typography>
                                </StyleInformationBox>
                                <StyleInformationBox>
                                    <Typography color='gray' style={{
                                        fontSize: '14px',
                                        fontWeight: "bold"
                                    }}>
                                        Status:
                                    </Typography>
                                    <Typography style={{
                                        fontSize: '14px',
                                    }}>

                                        <Label
                                            variant="soft"
                                            color={
                                                (deposit?.status === 'Approve' && 'success') ||
                                                (deposit?.status === 'Pending' && 'default') ||
                                                (deposit?.status === 'Rejected' && 'error') ||
                                                'error'
                                            }
                                        >
                                            {deposit?.status}
                                        </Label>
                                    </Typography>
                                </StyleInformationBox>
                            </Grid>
                            <Grid item xs={12} sx={{ display: 'flex', flexWrap: 'wrap', gap: '16px' }}>
                                <StyleInformationBox>
                                    <Typography color='gray' style={{
                                        fontSize: '14px',
                                        fontWeight: "bold"
                                    }}>
                                        Investor Name:
                                    </Typography>
                                    <Typography style={{
                                        fontSize: '14px',
                                    }}>
                                        {deposit?.investorName}
                                    </Typography>
                                </StyleInformationBox>
                                <StyleInformationBox>
                                    <Typography color='gray' style={{
                                        fontSize: '14px',
                                        fontWeight: "bold"
                                    }}>
                                        Created At:
                                    </Typography>
                                    <Typography style={{
                                        fontSize: '14px',
                                    }}>
                                        {fDate(deposit?.createdAt)}
                                    </Typography>
                                </StyleInformationBox>
                            </Grid>
                        </Grid>
                        <Typography sx={{ paddingLeft: 6 }} variant='h6' component="p" mb={2}>
                            Bank Information:
                        </Typography>
                        <Grid container spacing={2} paddingLeft={6} paddingBottom={4}>
                            <Grid item xs={12} sx={{ display: 'flex', flexWrap: 'wrap', gap: '16px' }}>
                                {deposit?.depositType === "Check" && (
                                    <StyleInformationBox>
                                        <Typography color='gray' style={{
                                            fontSize: '14px',
                                            fontWeight: "bold"
                                        }}>
                                            Check No:
                                        </Typography>
                                        <Typography style={{
                                            fontSize: '14px',
                                        }}>
                                            {deposit?.checkNo}
                                        </Typography>
                                    </StyleInformationBox>
                                )}
                                {deposit?.depositType === 'E-Transfer' && (
                                    <StyleInformationBox>
                                        <Typography color='gray' style={{
                                            fontSize: '14px',
                                            fontWeight: "bold"
                                        }}>
                                            Own Account No:
                                        </Typography>
                                        <Typography style={{
                                            fontSize: '14px',
                                        }}>
                                            {deposit?.ownAccountNo}
                                        </Typography>
                                    </StyleInformationBox>
                                )}
                                <StyleInformationBox>
                                    <Typography color='gray' style={{
                                        fontSize: '14px',
                                        fontWeight: "bold"
                                    }}>
                                        Bank Name:
                                    </Typography>
                                    <Typography style={{
                                        fontSize: '14px',
                                    }}>
                                        {deposit?.bankName}
                                    </Typography>
                                </StyleInformationBox>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Card>
            <DeleteConfirmDialog
                open={showSaveModal}
                onCancel={handleCancelSave}
                onConfirm={handleConfirmSave}
                header="Confirm Status Change"
                contentText={`Are you sure you want to change the status to "${status}"?`}
            />
        </Container>
    )
}

export default DepositHistoryDetailsPage;
