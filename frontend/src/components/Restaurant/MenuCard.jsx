import React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionActions from "@mui/material/AccordionActions";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Button, Checkbox, FormControlLabel, FormGroup } from "@mui/material";


const ingredients = [
    {
        category: "Nuts and Seeds",
        ingredients: ["Cashews"]
     },
    {
        category: "Protein",
        ingredients: ["Ground beef","Bacon strips"],
    },
     {
        category: "Bread",
        ingredients: ["Hamburger buns"],
    },
]

const MenuCard = () => {

    const handeleCheckboxChange = (value) => {
        console.log(value)
    }
  return (
    <Accordion>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1-content"
        id="panel1-header"
      >
        <div className="lg:flex  items-center justify-center">
          <div className="lg:flex items-center lg:gap-5">
            <img
              className="w-[7rem] h-[7rem] object-cover"
              src="https://cdn.pixabay.com/photo/2023/04/14/19/09/ai-generated-7925774_640.jpg"
              alt="burger"
            />
            <div className="space-y-1 lg:space-y-3 lg:max-w-2xl">
              <h3 className="font-semibold text-xl">Burger</h3>
              <p>&#8369;500</p>
              <p className="text-gray-400">
                Indulge in our Ultimate Gourmet Burger, a culinary masterpiece
                crafted for true burger aficionados. This mouth-watering delight
                features a juicy, flame-grilled beef patty, seasoned to
                perfection and topped with melted aged cheddar cheese. Nestled
                between a freshly baked brioche bun, this burger is layered with
                crisp lettuce, ripe tomato slices, and tangy pickles. 
              </p>
            </div>
          </div>
        </div>
      </AccordionSummary>
      <AccordionDetails>
              <form>
                  <div className="flex gap-5 flex-wrap">
                      {ingredients.map((item,index) => (
                          <div key={index}>
                              <p>{item.category}</p>
                              <FormGroup>
                                  {item.ingredients.map((item, index) => (
                                      <FormControlLabel key={index } control={<Checkbox onChange={()=> handeleCheckboxChange(item)} />} label={item}/>
                                  ))}
                              </FormGroup>
                          </div>
                      ))}
                      
                  </div>
                  <div className="pt-5">
                          <Button type="submit" variant="contained" disabled={false}>{true? "Add to Cart" : "Out of Stock"}</Button>
                      </div>
                  </form>
      </AccordionDetails>
    </Accordion>
  );
};

export default MenuCard;
