import { Box, Container, Grid, Typography } from '@mui/material';
import howItWorksImag from '@/assets/how-it-works-img.png'
import appointmentIcon from '@/assets/icons/appointment-icon.png'
import doctorIcon from '@/assets/icons/doctor-icon.png'
import charityIcon from '@/assets/icons/charity-icon.png'
import searchIcon from '@/assets/icons/search-icon.png'
import Image from 'next/image';

const HowItWorks = () => {
    return (
        <Container>
            <Box>
                <Box sx={{
                    margin: "20px 0px",
                    textAlign: "center"
                }}>
                    <Box sx={{
                        textAlign: "start"
                    }}>
                        <Typography
                            color="primary"
                            variant="h6"
                            component="h1"
                            fontWeight={700}
                            my={2}
                        >
                            How it works
                        </Typography>
                        <Typography marginBottom={2} variant="h4" fontWeight={600}>4 Easy Steps to Get Your Solution</Typography>
                        <Typography component={"p"} fontWeight={300} fontSize={18}>Access to expert preparation Experienced  Across All Specialist</Typography>
                        <Typography component={"p"} fontWeight={300} fontSize={18}>Access to expert preparation Experienced Doctors</Typography>
                    </Box>
                </Box>
                <Grid container spacing={2} my={5} sx={{

                }}>
                    <Grid item md={6}>
                        <Box sx={{
                            display: "flex",
                            mx: "auto",
                            justifyContent: 'center',
                            justifyItems: "center",
                            mt: "20px"
                        }}>
                            <Image src={howItWorksImag} alt="howItWorksImag" width={500} />
                        </Box>
                    </Grid>

                    <Grid item md={6} >
                        <Box sx={{
                            display: "flex",
                            gap: "15px",

                        }}>
                            <Box sx={{

                                gap: "15px",
                                border: "2px solid rgba(245,245,245,1)",
                                padding: "15px",
                                alignItems: "center",
                                borderRadius: "10px"

                            }}>
                                <Box sx={{
                                    padding: "10px",
                                    borderRadius: "10px"
                                }}>
                                    <Image src={searchIcon} alt="award" width={50} />
                                </Box>
                                <Box>
                                    <Typography my={"10px"} variant="h6" component="h6" fontWeight={600}>
                                        Search Doctor
                                    </Typography>
                                    <Typography sx={{ color: "secondary.main" }} variant="body2" fontWeight={600}>
                                        Duas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui offici
                                    </Typography>
                                </Box>
                            </Box>
                            <Box sx={{

                                gap: "15px",
                                border: "2px solid rgba(245,245,245,1)",
                                padding: "15px",
                                alignItems: "center",
                                borderRadius: "10px"

                            }}>
                                <Box sx={{
                                    padding: "10px",
                                    borderRadius: "10px"
                                }}>
                                    <Image src={doctorIcon} alt="doctorIcon" width={50} />
                                </Box>
                                <Box>
                                    <Typography my={"10px"} variant="h6" component="h6" fontWeight={600}>
                                        Check Doctor Profile
                                    </Typography>
                                    <Typography sx={{ color: "secondary.main" }} variant="body2" color="primary.body1" fontWeight={600}>
                                        Duas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui offici
                                    </Typography>
                                </Box>
                            </Box>
                        </Box>
                        <Box sx={{
                            display: "flex",
                            gap: "15px",
                            marginTop: "15px"

                        }}>
                            <Box sx={{

                                gap: "15px",
                                border: "2px solid rgba(245,245,245,1)",
                                padding: "15px",
                                alignItems: "center",
                                borderRadius: "10px"

                            }}>
                                <Box sx={{
                                    padding: "10px",
                                    borderRadius: "10px"
                                }}>
                                    <Image src={appointmentIcon} alt="appointmentIcon" width={50} />
                                </Box>
                                <Box>
                                    <Typography my={"10px"} variant="h6" component="h6" fontWeight={600}>
                                        Schedule Appointment
                                    </Typography>
                                    <Typography sx={{ color: "secondary.main" }} variant="body2" fontWeight={600}>
                                        Duas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui offici
                                    </Typography>
                                </Box>
                            </Box>
                            <Box sx={{

                                gap: "15px",
                                border: "2px solid rgba(245,245,245,1)",
                                padding: "15px",
                                alignItems: "center",
                                borderRadius: "10px"

                            }}>
                                <Box sx={{
                                    padding: "10px",
                                    borderRadius: "10px"
                                }}>
                                    <Image src={charityIcon} alt="charityIcon" width={50} />
                                </Box>
                                <Box>
                                    <Typography my={"10px"} variant="h6" component="h6" fontWeight={600}>
                                        Get Your Solution
                                    </Typography>
                                    <Typography sx={{ color: "secondary.main" }} variant="body2" color="primary.body1" fontWeight={600}>
                                        Duas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui offici
                                    </Typography>
                                </Box>
                            </Box>
                        </Box>
                    </Grid>
                </Grid>
            </Box>
        </Container>
    );
};

export default HowItWorks;








