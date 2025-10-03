import { useState } from "react";
import { Menu } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
//import Ielts from "../Images/Ielts.jpg";
import { Home, Info, BookOpen,  Mail } from "lucide-react";
import { motion } from "framer-motion";

export default function Nav() {
  const [open, setOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const location = useLocation();

  const menuItems = [
    { name: "Home", path: "/", icon: <Home size={20} /> },
     //{ name: "Products", path: "/Product", icon: <Globe size={20} /> },
       { name: "AllProduct", path: "/allproduct", icon: <Mail size={20} /> },
    { name: "About", path: "/about", icon: <Info size={20} /> },
    { name: "Services", path: "/services", icon: <BookOpen size={20} /> },
  
    { name: "Contact Us", path: "/contact", icon: <Mail size={20} /> },
   
  ];

  const desktopItemVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.1, duration: 0.4 },
    }),
  };

  const drawerItemVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: (i) => ({
      opacity: 1,
      x: 0,
      transition: { delay: i * 0.1, duration: 0.4 },
    }),
  };

  return (
    <>
      <motion.div
       
      >
        <AppBar
          position="fixed"
          sx={{
            background: "teal",
            boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
            padding: "0 20px",
           
          }}
        >
          <Toolbar className="flex justify-between">
            {/* Logo */}
            <Box className="flex items-center">
           
              <h1 className="text-xl font-bold text-white">APAV International</h1>
            </Box>

            {!isMobile && (
              <Box className="hidden md:flex space-x-6">
                {menuItems.map((item, i) => {
                  const isActive = location.pathname === item.path;
                  return (
                    <motion.div
                      key={i}
                      custom={i}
                      initial="hidden"
                      animate="visible"
                      variants={desktopItemVariants}
                    >
                      <Button
                        component={Link}
                        to={item.path}
                        sx={{
                          color: isActive ? "#fff" : "#e0f2f1",
                          fontWeight: isActive ? "bold" : 500,
                          textTransform: "none",
                          borderBottom: isActive
                            ? "2px solid white"
                            : "2px solid transparent",
                          borderRadius: 0,
                          "&:hover": {
                            borderBottom: "2px solid #fff",
                            background: "transparent",
                          },
                        }}
                      >
                        {item.name}
                      </Button>
                    </motion.div>
                  );
                })}
              </Box>
            )}

            {isMobile && (
              <IconButton sx={{ color: "white" }} onClick={() => setOpen(true)}>
                <Menu size={28} />
              </IconButton>
            )}
          </Toolbar>
        </AppBar>
      </motion.div>

      {isMobile && (
        <Drawer
          anchor="right"
          open={open}
          onClose={() => setOpen(false)}
          PaperProps={{
            component: motion.div,
            initial: { x: 300 },
            animate: { x: 0 },
            exit: { x: 300 },
            transition: { duration: 0.4 },
            sx: {
              width: 250,
              height: "100%",
              background: "black",
              color: "#fff",
              paddingTop: 4,
            },
          }}
        >
          <List>
            {menuItems.map((item, i) => {
              const isActive = location.pathname === item.path;
              return (
                <motion.div
                  key={i}
                  custom={i}
                  initial="hidden"
                  animate="visible"
                  variants={drawerItemVariants}
                >
                  <ListItem
                    button
                    component={Link}
                    to={item.path}
                    onClick={() => setOpen(false)}
                    sx={{ mb: 1, borderRadius: 1 }}
                  >
                    <Box className="flex items-center space-x-3 w-full px-4">
                      <span style={{ color: "#fff" }}>{item.icon}</span>
                      <ListItemText
                        primary={item.name}
                        primaryTypographyProps={{
                          fontWeight: isActive ? "bold" : 500,
                          color: "#fff",
                        }}
                      />
                    </Box>
                  </ListItem>
                </motion.div>
              );
            })}
          </List>
        </Drawer>
      )}
    </>
  );
}
