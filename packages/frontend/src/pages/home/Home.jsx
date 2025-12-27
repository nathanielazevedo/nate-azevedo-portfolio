import React from "react";
import { useNavigate } from "react-router-dom";
import {
  Container,
  Typography,
  Box,
  Button,
  Grid,
  Card,
  CardContent,
  Chip,
  useTheme,
} from "@mui/material";
import {
  PlayArrow,
  FitnessCenter,
  VideoLibrary,
  Code,
  TrendingUp,
  School,
} from "@mui/icons-material";

const PromoPage = () => {
  const navigate = useNavigate();
  const theme = useTheme();
  const features = [
    {
      icon: <Code />,
      title: "Coding Drills",
      description:
        "Practice Python, C#, Pandas, and more with interactive coding challenges. Write real code and get instant feedback on your solutions.",
      count: "100+ Drills",
    },
    {
      icon: <FitnessCenter />,
      title: "Coding Workouts",
      description:
        "Sharpen your problem-solving skills with structured exercises designed to build muscle memory for common programming patterns.",
      count: "15+ Workouts",
    },
    {
      icon: <VideoLibrary />,
      title: "Interactive Games",
      description:
        "Master JavaScript fundamentals through engaging challenges that test your understanding of comparison operators, type coercion, and error handling.",
      count: "50+ Games",
    },
  ];

  const games = [
    {
      name: "True or False",
      description:
        "Test your knowledge of JavaScript comparison operators and type coercion",
      tag: "Fundamentals",
    },
    {
      name: "Will It Throw",
      description:
        "Predict when JavaScript will throw errors in various scenarios",
      tag: "Error Handling",
    },
    {
      name: "Choose Correct Comparison",
      description:
        "Select the right comparison operator for different expressions",
      tag: "Operators",
    },
  ];

  return (
    <Box sx={{ bgcolor: "background.default", minHeight: "100vh", color: "text.primary" }}>
      {/* Hero Section */}
      <Container maxWidth="lg">
        <Box sx={{ py: 12, textAlign: "center" }}>
          <Typography
            variant="h2"
            sx={{
              fontWeight: 600,
              mb: 2,
              fontSize: { xs: "2.5rem", md: "3.5rem" },
            }}
          >
            Master Web Development
          </Typography>
          <Typography
            variant="h5"
            sx={{
              color: "text.secondary",
              mb: 1,
              fontWeight: 400,
              maxWidth: "800px",
              mx: "auto",
            }}
          >
            Practice JavaScript Through Interactive Games and Workouts
          </Typography>
          <Typography
            variant="body1"
            sx={{
              color: "text.secondary",
              mb: 5,
              fontSize: "1.1rem",
            }}
          >
            Totally free. No sign-up required.
          </Typography>
          <Box
            sx={{
              display: "flex",
              gap: 2,
              justifyContent: "center",
              flexWrap: "wrap",
            }}
          >
            <Button
              variant="contained"
              size="large"
              startIcon={<PlayArrow />}
              onClick={() => navigate("/games")}
              sx={{
                bgcolor: "#10A37F",
                color: "white",
                px: 4,
                py: 1.5,
                textTransform: "none",
                fontSize: "1rem",
                fontWeight: 500,
                "&:hover": {
                  bgcolor: "#0d8c6d",
                },
              }}
            >
              Start Learning
            </Button>
            <Button
              variant="outlined"
              size="large"
              onClick={() => navigate("/workouts")}
              sx={{
                borderColor: "divider",
                color: "text.primary",
                px: 4,
                py: 1.5,
                textTransform: "none",
                fontSize: "1rem",
                fontWeight: 500,
                "&:hover": {
                  borderColor: "primary.main",
                  bgcolor: "action.hover",
                },
              }}
            >
              View Workouts
            </Button>
          </Box>
        </Box>

        {/* Features Grid */}
        <Box sx={{ py: 8 }}>
          <Grid container spacing={3}>
            {features.map((feature, index) => (
              <Grid item xs={12} md={4} key={index}>
                <Card
                  sx={{
                    bgcolor: "background.paper",
                    height: "100%",
                    transition: "all 0.2s ease",
                    "&:hover": {
                      transform: "translateY(-4px)",
                      boxShadow: 4,
                    },
                  }}
                >
                  <CardContent sx={{ p: 3 }}>
                    <Box
                      sx={{
                        color: "primary.main",
                        mb: 2,
                        display: "flex",
                        alignItems: "center",
                        gap: 1,
                      }}
                    >
                      {feature.icon}
                      <Chip
                        label={feature.count}
                        size="small"
                        sx={{
                          bgcolor: "action.selected",
                          color: "primary.main",
                          fontWeight: 500,
                        }}
                      />
                    </Box>
                    <Typography variant="h6" sx={{ mb: 1.5, fontWeight: 600 }}>
                      {feature.title}
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{ color: "text.secondary" }}
                    >
                      {feature.description}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>

        {/* Games Preview */}
        <Box sx={{ py: 8 }}>
          <Typography
            variant="h4"
            sx={{
              mb: 1,
              fontWeight: 600,
              textAlign: "center",
            }}
          >
            Featured Games
          </Typography>
          <Typography
            variant="body1"
            sx={{
              mb: 5,
              color: "text.secondary",
              textAlign: "center",
            }}
          >
            Learn by doing with interactive challenges
          </Typography>
          <Grid container spacing={3}>
            {games.map((game, index) => (
              <Grid item xs={12} md={4} key={index}>
                <Card
                  sx={{
                    bgcolor: "background.paper",
                    height: "100%",
                    cursor: "pointer",
                    transition: "all 0.2s ease",
                    "&:hover": {
                      transform: "translateY(-4px)",
                      boxShadow: 4,
                    },
                  }}
                >
                  <CardContent sx={{ p: 3 }}>
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        gap: 1,
                        mb: 2,
                      }}
                    >
                      <Typography
                        variant="h6"
                        sx={{ fontWeight: 600, flexGrow: 1 }}
                      >
                        {game.name}
                      </Typography>
                      <Chip
                        label={game.tag}
                        size="small"
                        variant="outlined"
                        sx={{
                          borderColor: "divider",
                          color: "text.secondary",
                        }}
                      />
                    </Box>
                    <Typography
                      variant="body2"
                      sx={{ color: "text.secondary" }}
                    >
                      {game.description}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>

        {/* Stats Section */}
        <Box sx={{ py: 8, textAlign: "center" }}>
          <Card sx={{ bgcolor: "background.paper", p: 5 }}>
            <Typography variant="h4" sx={{ mb: 3, fontWeight: 600 }}>
              Why Web Dev Interviews?
            </Typography>
            <Grid container spacing={4}>
              <Grid item xs={12} sm={4}>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    gap: 1,
                  }}
                >
                  <School sx={{ fontSize: 48, color: "primary.main", mb: 1 }} />
                  <Typography variant="h6" sx={{ fontWeight: 600 }}>
                    Learning-Focused
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{ color: "text.secondary" }}
                  >
                    Designed to capture your brain's interest through engaging
                    challenges
                  </Typography>
                </Box>
              </Grid>
              <Grid item xs={12} sm={4}>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    gap: 1,
                  }}
                >
                  <TrendingUp sx={{ fontSize: 48, color: "primary.main", mb: 1 }} />
                  <Typography variant="h6" sx={{ fontWeight: 600 }}>
                    Progressive
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{ color: "text.secondary" }}
                  >
                    Build skills gradually with structured workouts and games
                  </Typography>
                </Box>
              </Grid>
              <Grid item xs={12} sm={4}>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    gap: 1,
                  }}
                >
                  <PlayArrow sx={{ fontSize: 48, color: "primary.main", mb: 1 }} />
                  <Typography variant="h6" sx={{ fontWeight: 600 }}>
                    Always Free
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{ color: "text.secondary" }}
                  >
                    No paywalls, no subscriptions. Just pure learning
                  </Typography>
                </Box>
              </Grid>
            </Grid>
          </Card>
        </Box>

        {/* CTA Section */}
        <Box sx={{ py: 10, textAlign: "center" }}>
          <Typography variant="h4" sx={{ mb: 2, fontWeight: 600 }}>
            Ready to Level Up?
          </Typography>
          <Typography
            variant="body1"
            sx={{
              mb: 4,
              color: "text.secondary",
              maxWidth: "600px",
              mx: "auto",
            }}
          >
            Join developers who are sharpening their JavaScript skills through
            interactive practice
          </Typography>
          <Button
            variant="contained"
            size="large"
            startIcon={<PlayArrow />}
            onClick={() => navigate("/games")}
            sx={{
              bgcolor: "#10A37F",
              color: "white",
              px: 5,
              py: 2,
              textTransform: "none",
              fontSize: "1.1rem",
              fontWeight: 500,
              "&:hover": {
                bgcolor: "#0d8c6d",
              },
            }}
          >
            Get Started Now
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default PromoPage;
