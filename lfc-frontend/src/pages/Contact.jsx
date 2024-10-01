import { useState } from "react";
import { Box, Container, Typography, Divider, Collapse } from "@mui/material";
import { getFontStyle } from "../components/Utils/Utils";
import { Link } from "react-router-dom";

export default function Contact() {
  const [openSection, setOpenSection] = useState(null);

  const toggleSection = (section) => {
    setOpenSection(openSection === section ? null : section);
  };

  return (
    <>
      <Box
        sx={{
          backgroundColor: "#dc0714",
          paddingTop: "150px",
          paddingBottom: "5px",
        }}
      >
        <Container maxWidth={"xl"}>
          <Typography
            sx={{
              ...getFontStyle("white", "700", "36px"),
              marginBottom: "30px",
            }}
          >
            Supporter Services
            <Typography
              component="span"
              sx={{
                display: "inline",
                ...getFontStyle("white", "400", "36px"),
                marginLeft: "12px",
              }}
            >
              Contact Us
            </Typography>
          </Typography>
        </Container>
      </Box>
      <Box sx={{ padding: "30px" }}>
        <Container maxWidth={"sm"}>
          <Typography
            sx={{
              ...getFontStyle("rgba(12, 12, 12, 0.7)", "700", "18px", "unset"),
              marginBottom: "5px",
            }}
          >
            If you need help with any Club services, including Ticketing, LFC
            Official Membership and the Official Liverpool FC Store, you can
            find useful information and answers to frequently asked questions on
            our Help Centre.
          </Typography>
          <Typography
            sx={{
              ...getFontStyle("rgba(12, 12, 12, 0.7)", "400", "18px", "unset"),
              marginBottom: "20px",
            }}
          >
            You can also contact our Supporter Services team for help with any
            of the above, or for general Club enquiries or complaints. We’re
            normally available Monday to Saturday.
          </Typography>
        </Container>
      </Box>
      <Box sx={{ backgroundColor: "#f6f6f6", padding: "30px" }}>
        <Container maxWidth={"sm"}>
          {/* Supporter Services Opening Times */}
          <Box sx={{ marginBottom: "40px" }}>
            <Typography
              sx={{
                ...getFontStyle("black", "normal", "26px", "unset", "1.2"),
                marginBottom: "30px",
              }}
            >
              Supporter Services Opening Times
            </Typography>
            {/* Normal Opening Hours */}
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                marginBottom: "5px",
                cursor: "pointer",
              }}
              onClick={() => toggleSection("normal")}
            >
              <Typography
                sx={{
                  ...getFontStyle("black", "400", "16px", "unset"),
                  marginBottom: "25px",
                }}
              >
                Normal Opening Hours
              </Typography>
              <Typography sx={{ ...getFontStyle("black", "700", "16px") }}>
                {openSection === "normal" ? "−" : "+"}
              </Typography>
            </Box>
            
            <Collapse in={openSection === "normal"} timeout={300}>
              <Box sx={{ marginTop: "10px" }}>
                <Typography
                  sx={{
                    ...getFontStyle(
                      "rgba(12, 12, 12, 0.7)",
                      "bold",
                      "14px",
                      "unset"
                    ),
                    margin: "20px 0",
                  }}
                >
                  Live Chat, Social and Email
                  <Typography
                    sx={{
                      ...getFontStyle(
                        "rgba(12, 12, 12, 0.7)",
                        "400",
                        "14px",
                        "unset"
                      ),
                    }}
                  >
                    <li>Mon-Fri: 8.15am-5.30pm</li>
                  </Typography>
                  <Typography
                    sx={{
                      ...getFontStyle(
                        "rgba(12, 12, 12, 0.7)",
                        "400",
                        "14px",
                        "unset"
                      ),
                    }}
                  >
                    <li>Saturday: 9am-3pm</li>
                  </Typography>
                  <Typography
                    sx={{
                      ...getFontStyle(
                        "rgba(12, 12, 12, 0.7)",
                        "400",
                        "14px",
                        "unset"
                      ),
                    }}
                  >
                    <li>Saturday: 9am-3pm</li>
                  </Typography>
                </Typography>
                <Typography
                  sx={{
                    ...getFontStyle(
                      "rgba(12, 12, 12, 0.7)",
                      "bold",
                      "14px",
                      "unset"
                    ),
                    margin: "20px 0",
                  }}
                >
                  Ticket Office Windows
                  <Typography
                    sx={{
                      ...getFontStyle(
                        "rgba(12, 12, 12, 0.7)",
                        "400",
                        "14px",
                        "unset"
                      ),
                    }}
                  >
                    <li>Mon-Fri: 8.15am-4pm</li>
                  </Typography>
                  <Typography
                    sx={{
                      ...getFontStyle(
                        "rgba(12, 12, 12, 0.7)",
                        "400",
                        "14px",
                        "unset"
                      ),
                    }}
                  >
                    <li>Saturday: 9am-3pm</li>
                  </Typography>
                  <Typography
                    sx={{
                      ...getFontStyle(
                        "rgba(12, 12, 12, 0.7)",
                        "400",
                        "14px",
                        "unset"
                      ),
                    }}
                  >
                    <li>Sunday: Closed</li>
                  </Typography>
                </Typography>
              </Box>
            </Collapse>
            
            <Divider />
            {/* Matchday Opening Hours */}
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                marginTop: "10px",
                marginBottom: "5px",
                cursor: "pointer",
              }}
              onClick={() => toggleSection("matchday")}
            >
              <Typography
                sx={{
                  ...getFontStyle("black", "400", "16px", "unset"),
                  marginTop: "25px",
                }}
              >
                Matchday Opening Hours
              </Typography>
              <Typography
                sx={{
                  ...getFontStyle("black", "700", "18px"),
                  marginTop: "25px",
                  marginBottom: "25px",
                }}
              >
                {openSection === "matchday" ? "−" : "+"}
              </Typography>
            </Box>
            
            <Collapse in={openSection === "matchday"} timeout={300}>
              <Box sx={{ marginTop: "10px" }}>
                <Typography
                  sx={{
                    ...getFontStyle(
                      "rgba(12, 12, 12, 0.7)",
                      "bold",
                      "14px",
                      "unset"
                    ),
                    margin: "20px 0",
                  }}
                >
                  Ticketing enquiries
                  <Typography
                    sx={{
                      ...getFontStyle(
                        "rgba(12, 12, 12, 0.7)",
                        "400",
                        "14px",
                        "unset"
                      ),
                      display: "inline",
                    }}
                  >
                    - opening hours will vary depending on kick-off. We'll
                    publish opening hours for upcoming matches on this page.
                  </Typography>
                </Typography>
                <Typography
                  sx={{
                    ...getFontStyle(
                      "rgba(12, 12, 12, 0.7)",
                      "bold",
                      "14px",
                      "unset"
                    ),
                    margin: "20px 0",
                  }}
                >
                  Other enquiries (e.g. Official Liverpool FC Store, Stadium
                  Tours etc.)
                  <Typography
                    sx={{
                      ...getFontStyle(
                        "rgba(12, 12, 12, 0.7)",
                        "400",
                        "14px",
                        "unset"
                      ),
                      display: "inline",
                    }}
                  >
                    - our hours don't change. We're available to help during the
                    same times as a non-matchday.
                  </Typography>
                </Typography>
              </Box>
            </Collapse>
            
            <Divider />
          </Box>

          {/* Ways to Contact Supporter Services */}
          <Typography
            sx={{
              ...getFontStyle("black", "400", "26px", "unset", "1.2"),
              marginBottom: "20px",
              marginTop: "80px",
            }}
          >
            Ways to Contact Supporter Services
          </Typography>

          <Box>
            {/* Contact Method: Chat */}
            <Typography
              sx={{
                ...getFontStyle("black", "700", "18px", "unset"),
                marginBottom: "5px",
              }}
            >
              Chat
            </Typography>
            <Typography
              sx={{
                ...getFontStyle(
                  "rgba(12, 12, 12, 0.7)",
                  "400",
                  "18px",
                  "unset"
                ),
                marginBottom: "20px",
              }}
            >
              Press the chat button on the bottom-right of the screen to start a
              chat with us.
            </Typography>

            {/* Contact Method: Email */}
            <Typography
              sx={{
                ...getFontStyle("black", "700", "18px", "unset"),
                marginBottom: "5px",
              }}
            >
              Email
            </Typography>
            <Typography
              sx={{
                ...getFontStyle(
                  "rgba(12, 12, 12, 0.7)",
                  "400",
                  "18px",
                  "unset"
                ),
                marginBottom: "20px",
              }}
            >
              Fill in our{" "}
              <Link style={{ color: "red", textDecoration: "none" }}>
                contact form
              </Link>{" "}
              and we'll email you back. We aim to respond within 48 hours.
            </Typography>

            {/* Contact Method: Social Media */}
            <Typography
              sx={{
                ...getFontStyle("black", "700", "18px", "unset"),
                marginBottom: "5px",
              }}
            >
              Social Media
            </Typography>
            <Typography
              sx={{
                ...getFontStyle(
                  "rgba(12, 12, 12, 0.7)",
                  "400",
                  "18px",
                  "unset"
                ),
                marginBottom: "20px",
              }}
            >
              <Link href="#" style={{ color: "red", textDecoration: "none" }}>
                Contact us on X
              </Link>{" "}
              - Follow @LFCHelp for important ticketing, matchday, and other
              Supporter Services updates.
            </Typography>
            <Typography
              sx={{
                ...getFontStyle(
                  "rgba(12, 12, 12, 0.7)",
                  "400",
                  "18px",
                  "unset"
                ),
                marginBottom: "20px",
              }}
            >
              <Link href="#" style={{ color: "red", textDecoration: "none" }}>
                Contact us on Facebook
              </Link>{" "}
              - Send us a message through our Liverpool FC Help page. We aim to
              respond within 4 hours.
            </Typography>

            {/* Contact Method: Visit Ticket Office */}
            <Typography
              sx={{
                ...getFontStyle("black", "700", "18px", "unset"),
                marginBottom: "5px",
              }}
            >
              Visit the Ticket Office at Anfield
            </Typography>
            <Typography
              sx={{
                ...getFontStyle(
                  "rgba(12, 12, 12, 0.7)",
                  "400",
                  "18px",
                  "unset"
                ),
                marginBottom: "20px",
              }}
            >
              The Ticket Office is located underneath the Kop stand. You can
              contact us about ticketing using the options above, but if you're
              at{" "}
              <Link href="#" style={{ color: "red", textDecoration: "none" }}>
                Anfield
              </Link>
              , you can also visit us in person.
            </Typography>

            {/* Contact Method: Accessible Contact Options */}
            <Typography
              sx={{
                ...getFontStyle("black", "700", "18px", "unset"),
                marginBottom: "5px",
              }}
            >
              Accessible Contact Options
            </Typography>
            <Typography
              sx={{
                ...getFontStyle(
                  "rgba(12, 12, 12, 0.7)",
                  "400",
                  "18px",
                  "unset"
                ),
                marginBottom: "20px",
              }}
            >
              Any supporters who are registered with the club as disabled, or
              who have accessibility needs, can call us on 0151 264 2500. Our
              phone line is open Mon-Fri 8.15am-4pm and Saturday 9am-3pm.
            </Typography>
          </Box>
        </Container>
      </Box>
    </>
  );
}
