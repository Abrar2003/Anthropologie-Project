                                    // JS For Clothing 


                                                  // Array of object manually created 

    let productData = [
        {
            image: "https://images.urbndata.com/is/image/Anthropologie/4110916210063_040_b2?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349",
            image2: "https://images.urbndata.com/is/image/Anthropologie/4110916210063_040_b14?$a15-pdp-detail-shot$&fit=constrain&fmt=webp&qlt=80&wid=640",
            name: "Maeve Long-Sleeve Buttondown",
            price: 98.00,
            color:"blue",
            id: "c1",
            // brand:,
            // size:,
        },
        {
            image: "https://images.urbndata.com/is/image/Anthropologie/4110916210077_040_b2?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349",
            image2: "https://images.urbndata.com/is/image/Anthropologie/4110916210077_040_b?$a15-pdp-detail-shot$&fit=constrain&fmt=webp&qlt=80&wid=640",
            name: "Maeve Bustier Top",
            price: 78.00,
            color:"blue",
            id: "c2",
            // brand:,
            // size:,
        },
        {
            image: "https://images.urbndata.com/is/image/Anthropologie/66489675_040_b2?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349",
            image2: "https://images.urbndata.com/is/image/Anthropologie/66489675_040_b?$a15-pdp-detail-shot$&fit=constrain&fmt=webp&qlt=80&wid=640", 
            name: "By Anthropologie The Sapphire Hoodie",
            price: 42.00,
            color:"blue",
            id: "c3",
            // brand:,
            // size:,
        },
        {
            image: "https://images.urbndata.com/is/image/Anthropologie/4115929840016_011_b?$a15-pdp-detail-shot$&fit=constrain&fmt=webp&qlt=80&wid=640",
            image2: "https://images.urbndata.com/is/image/Anthropologie/4115929840016_011_b15?$a15-pdp-detail-shot$&fit=constrain&fmt=webp&qlt=80&wid=640", 
            name: "Favorite Daughter Agnes Vest",
            price: 44.00,
            color:"white",
            id: "c4",
            
            // brand:,
            // size:,
        },
        {
            image: "https://images.urbndata.com/is/image/Anthropologie/4130646420009_041_b14?$a15-pdp-detail-shot$&fit=constrain&fmt=webp&qlt=80&wid=640",
            image2: "https://images.urbndata.com/is/image/Anthropologie/4130646420009_041_b15?$a15-pdp-detail-shot$&fit=constrain&fmt=webp&qlt=80&wid=640",
            name: "The Somerset Maxi Dress",
            price: 31.00,
            color:"blue",
            id: "c5",
            // brand:,
            // size:,
        },
        {
            image: "https://images.urbndata.com/is/image/Anthropologie/4130084320085_030_b2?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349",
            image2: "https://images.urbndata.com/is/image/Anthropologie/4130084320085_030_b?$a15-pdp-detail-shot$&fit=constrain&fmt=webp&qlt=80&wid=640", 
            name: "Deep V-Neck Vibrant Mini Dress",
            price: 28.00,
            color:"green",
            id: "c6",
            // brand:,
            // size:,
        },
        {
            image: "https://images.urbndata.com/is/image/Anthropologie/4112449700005_001_b2?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349",
            image2: "https://images.urbndata.com/is/image/Anthropologie/4112449700005_001_b?$a15-pdp-detail-shot$&fit=constrain&fmt=webp&qlt=80&wid=640", 
            name: "Layered Cutout Tank",
            price: 29.00,
            color:"black",
            id: "c7",
            // brand:,
            // size:,
        },
        {
            image: "https://images.urbndata.com/is/image/Anthropologie/4112326250021_001_b2?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349",
            image2: "https://images.urbndata.com/is/image/Anthropologie/4112326250021_001_b?$a15-pdp-detail-shot$&fit=constrain&fmt=webp&qlt=80&wid=640",
            name: "En Elly Ruched Mock-Neck Tank",
            price: 188.00,
            color:"black",
            id: "c8",
            // brand:,
            // size:,
        },
        {
            image: "https://images.urbndata.com/is/image/Anthropologie/4115831920001_042_b17?$a15-pdp-detail-shot$&fit=constrain&fmt=webp&qlt=80&wid=640",
            image2: "https://images.urbndata.com/is/image/Anthropologie/4115831920001_042_b16?$a15-pdp-detail-shot$&fit=constrain&fmt=webp&qlt=80&wid=640", 
            name: "The Essential Slim Kick Flare Pants",
            price: 130.00,
            color:"blue",
            id: "c9",
            // brand:,
            // size:,
        },
        {
            image: "https://images.urbndata.com/is/image/Anthropologie/4111345460005_001_b2?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349",
            image2: "https://images.urbndata.com/is/image/Anthropologie/4111345460005_001_b?$a15-pdp-detail-shot$&fit=constrain&fmt=webp&qlt=80&wid=640", 
            name: "Pilcro Shrunken Shacket",
            price: 38.00,
            color:"black",
            id: "c10",
            // brand:,
            // size:,
        },
        {
            image: "https://images.urbndata.com/is/image/Anthropologie/4125675950002_410_b2?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349",
            image2: "https://images.urbndata.com/is/image/Anthropologie/4125675950002_410_b15?$a15-pdp-detail-shot$&fit=constrain&fmt=webp&qlt=80&wid=640",
            name: "Significant Other Ophelia Shorts",
            price: 218.00,
            color:"white",
            id: "c11",
            // brand:,
            // size:,
        },
        {
            image: "https://images.urbndata.com/is/image/Anthropologie/4110089540080_010_b2?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349",
            image2: "https://images.urbndata.com/is/image/Anthropologie/4110089540080_010_b?$a15-pdp-detail-shot$&fit=constrain&fmt=webp&qlt=80&wid=640", 
            name: "Sarah Campbell for Anthropologie Floral Blouse",
            price: 90.00,
            color:"yellow",
            id: "c12",
            // brand:,
            // size:,
        },
        {
            image: "https://images.urbndata.com/is/image/Anthropologie/4130370060072_083_b2?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349",
            image2: "https://images.urbndata.com/is/image/Anthropologie/4130370060072_083_b?$a15-pdp-detail-shot$&fit=constrain&fmt=webp&qlt=80&wid=640",
            name: "The Somerset Maxi Dress",
            price: 400.00,
            color:"yellow",
            id: "c13",
            // brand:,
            // size:,
        },
        {
            image: "https://images.urbndata.com/is/image/Anthropologie/4110907290003_072_b2?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349",
            image2: "https://images.urbndata.com/is/image/Anthropologie/4110907290003_072_b?$a15-pdp-detail-shot$&fit=constrain&fmt=webp&qlt=80&wid=640",
            name: "The Romy Relaxed Buttondown",
            price: 326.00,
            color:"yellow",
            id: "c14",
            // brand:,
            // size:,
        },
        {
            image: "https://images.urbndata.com/is/image/Anthropologie/4110264840029_035_b2?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349",
            image2: "https://images.urbndata.com/is/image/Anthropologie/4110264840029_035_b4?$a15-pdp-detail-shot$&fit=constrain&fmt=webp&qlt=80&wid=640", 
            name: "Pilcro Oxford Tunic Buttondown",
            price: 382.00,
            color:"yellow",
            id: "c15",
            // brand:,
            // size:,
        },
        {
            image: "https://images.urbndata.com/is/image/Anthropologie/4130647160129_072_b2?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349",
            image2: "https://images.urbndata.com/is/image/Anthropologie/4130647160129_072_b14?$a15-pdp-detail-shot$&fit=constrain&fmt=webp&qlt=80&wid=640", 
            name: "The Somerset Mini Dress: Eyelet Edition",
            price: 325.00,
            color:"yellow",
            id: "c16",
            // brand:,
            // size:,
        },
        {
            image: "https://images.urbndata.com/is/image/Anthropologie/4112522160097_083_b2?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349",
            image2: "https://images.urbndata.com/is/image/Anthropologie/4112522160097_083_b?$a15-pdp-detail-shot$&fit=constrain&fmt=webp&qlt=80&wid=640", 
            name: "Maeve Ruffled Rib Halter Tank",
            price: 246.00,
            color:"yellow",
            id: "c17",
            // brand:,
            // size:,
        },
        {
            image: "https://images.urbndata.com/is/image/Anthropologie/4110370060061_083_b2?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349",
            image2: "https://images.urbndata.com/is/image/Anthropologie/4110370060061_083_b?$a15-pdp-detail-shot$&fit=constrain&fmt=webp&qlt=80&wid=640", 
            name: "Ruffled Pintucked Blouse",
            price: 196.00,
            color:"yellow",
            id: "c18",
            // brand:,
            // size:,
        },
        {
            image: "https://images.urbndata.com/is/image/Anthropologie/4130089450010_072_b2?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349",
            image2: "https://images.urbndata.com/is/image/Anthropologie/4130089450010_072_b?$a15-pdp-detail-shot$&fit=constrain&fmt=webp&qlt=80&wid=640",
            name: "Maeve Cross-Back Mini Dress",
            price: 248.00,
            color:"yellow",
            id: "c19",
            // brand:,
            // size:,
        },
        {
            image: "https://images.urbndata.com/is/image/Anthropologie/4112211810112_010_b2?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349",
            image2: "https://images.urbndata.com/is/image/Anthropologie/4112211810112_010_b?$a15-pdp-detail-shot$&fit=constrain&fmt=webp&qlt=80&wid=640",
            name: "Maeve Mock Neck Tank",
            price: 180.00,
            color:"white",
            id: "c20",
            // brand:,
            // size:,
        },
        {
            image: "https://images.urbndata.com/is/image/Anthropologie/4130647160137_001_b2?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349",
            image2: "https://images.urbndata.com/is/image/Anthropologie/4130647160137_001_b?$a15-pdp-detail-shot$&fit=constrain&fmt=webp&qlt=80&wid=640",
            name: "By Anthropologie Tiered Maxi Dress",
            price: 60.00,
            color:"black",
            id: "c21",
            // brand:,
            // size:,
        },
        {
            image: "https://images.urbndata.com/is/image/Anthropologie/4110652010043_060_b2?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349",
            image2: "https://images.urbndata.com/is/image/Anthropologie/4110652010043_060_b?$a15-pdp-detail-shot$&fit=constrain&fmt=webp&qlt=80&wid=640",
            name: "Pilcro Tavi Buttondown Blouse",
            price: 98.00,
            color:"red",
            id: "c22",
            // brand:,
            // size:,
        },
        {
            image: "https://images.urbndata.com/is/image/Anthropologie/66489675_062_b2?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349",
            image2: "https://images.urbndata.com/is/image/Anthropologie/66489675_062_b?$a15-pdp-detail-shot$&fit=constrain&fmt=webp&qlt=80&wid=640",
            name: "The Sapphire Hoodie",
            price: 98.00,
            color:"red",
            id: "c23",
            // brand:,
            // size:,
        },
        {
            image: "https://images.urbndata.com/is/image/Anthropologie/4110916210063_060_b2?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349",
            image2: "https://images.urbndata.com/is/image/Anthropologie/4110916210063_060_b?$a15-pdp-detail-shot$&fit=constrain&fmt=webp&qlt=80&wid=640",
            name: "Maeve Long-Sleeve Buttondown",
            price: 246.00,
            color:"red",
            id: "c24",
            // brand:,
            // size:,
        },
        {
            image: "https://images.urbndata.com/is/image/Anthropologie/4112609690221_060_b2?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349",
            image2: "https://images.urbndata.com/is/image/Anthropologie/4112609690221_060_b?$a15-pdp-detail-shot$&fit=constrain&fmt=webp&qlt=80&wid=640",
            name: "T.La Ribbed Halter Tank",
            price: 148.00,
            color:"red",
            id: "c25",
            // brand:,
            // size:,
        },
        {
            image: "https://images.urbndata.com/is/image/Anthropologie/4110647160056_064_b2?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349",
            image2: "https://images.urbndata.com/is/image/Anthropologie/4110647160056_064_b?$a15-pdp-detail-shot$&fit=constrain&fmt=webp&qlt=80&wid=640", 
            name: "Maeve Poplin Henley Shirt",
            price: 498.00,
            color:"red",
            id: "c26",
            // brand:,
            // size:,
        },
        {
            image: "https://images.urbndata.com/is/image/Anthropologie/4138348690017_060_b2?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349",
            image2: "https://images.urbndata.com/is/image/Anthropologie/4138348690017_060_b?$a15-pdp-detail-shot$&fit=constrain&fmt=webp&qlt=80&wid=640",
            name: "Tube Top and Wide-Leg Pant Set",
            price: 298.00,
            color:"red",
            id: "c27",
            // brand:,
            // size:,
        },
        {
            image: "https://images.urbndata.com/is/image/Anthropologie/4123650590210_008_b2?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349",
            image2: "https://images.urbndata.com/is/image/Anthropologie/4123650590210_008_b?$a15-pdp-detail-shot$&fit=constrain&fmt=webp&qlt=80&wid=640",
            name: "Maeve The Colette Cropped Wide-Leg Pants",
            price: 35.00,
            color:"green",
            id: "c28",
            // brand:,
            // size:,
        },
        {
            image: "https://images.urbndata.com/is/image/Anthropologie/4112919040016_032_b2?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349",
            image2: "https://images.urbndata.com/is/image/Anthropologie/4112919040016_032_b14?$a15-pdp-detail-shot$&fit=constrain&fmt=webp&qlt=80&wid=640",
            name: "Pilcro Ruched Ribbed Halter",
            price: 58.00,
            color:"green",
            id: "c29",
            // brand:,
            // size:,
        },
        {
            image: "https://images.urbndata.com/is/image/Anthropologie/4111212060005_032_b2?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349",
            image2: "https://images.urbndata.com/is/image/Anthropologie/4111212060005_032_b?$a15-pdp-detail-shot$&fit=constrain&fmt=webp&qlt=80&wid=640",
            name: "DOLAN Lace-Sleeve Sweatshirt",
            price: 68.00,
            color:"green",
            id: "c30",
            // brand:,
            // size:,
        },
        {
            image: "https://images.urbndata.com/is/image/Anthropologie/4130647160128_049_b?$a15-pdp-detail-shot$&fit=constrain&fmt=webp&qlt=80&wid=540",
            image2: "https://images.urbndata.com/is/image/Anthropologie/4130647160128_049_b15?$a15-pdp-detail-shot$&fit=constrain&fmt=webp&qlt=80&wid=540",
            name: "The Somerset Maxi Dress",
            price: 48.00,
            color:"blue",
            id: "c31",
            // brand:,
            // size:,
        },
        {
            image: "https://images.urbndata.com/is/image/Anthropologie/4123339180024_001_b2?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349",
            image2: "https://images.urbndata.com/is/image/Anthropologie/4123339180024_001_b?$a15-pdp-detail-shot$&fit=constrain&fmt=webp&qlt=80&wid=640",
            name: "Maeve Knit Flare Pants",
            price: 22.00,
            color:"black",
            id: "c32",
            // brand:,
            // size:,
        },
        {
            image: "https://images.urbndata.com/is/image/Anthropologie/66665274_065_b?$a15-pdp-detail-shot$&fit=constrain&fmt=webp&qlt=80&wid=640",
            image2: "https://images.urbndata.com/is/image/Anthropologie/66665274_065_b2?$a15-pdp-detail-shot$&fit=constrain&fmt=webp&qlt=80&wid=640",
            name: "The Somerset Mini Dress: Linen Edition",
            price: 88.00,
            color:"pink",
            id: "c33",
            // brand:,
            // size:,
        },
        {
            image: "https://images.urbndata.com/is/image/Anthropologie/4112522160115_068_b2?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349",
            image2: "https://images.urbndata.com/is/image/Anthropologie/4112522160115_068_b?$a15-pdp-detail-shot$&fit=constrain&fmt=webp&qlt=80&wid=640",
            name: "Pilcro Ribbed Henley Tee",
            price: 169.00,
            color:"pink",
            id: "c34",
            // brand:,
            // size:,
        },
        {
            image: "https://images.urbndata.com/is/image/Anthropologie/66796657_066_b14?$a15-pdp-detail-shot$&fit=constrain&fmt=webp&qlt=80&wid=640",
            image2: "https://images.urbndata.com/is/image/Anthropologie/66796657_066_b?$a15-pdp-detail-shot$&fit=constrain&fmt=webp&qlt=80&wid=640",
            name: "Maeve Ribbed Baby Tee",
            price: 179.00,
            color:"pink",
            id: "c35",
            // brand:,
            // size:,
        },
        {
            image: "https://images.urbndata.com/is/image/Anthropologie/68650548_066_b2?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349",
            image2: "https://images.urbndata.com/is/image/Anthropologie/68650548_066_b?$a15-pdp-detail-shot$&fit=constrain&fmt=webp&qlt=80&wid=640",
            name: "Graphic Sweatshirt",
            price: 88.00,
            color:"pink",
            id: "c36",
            // brand:,
            // size:,
        },
        {
            image: "https://images.urbndata.com/is/image/Anthropologie/4112368730044_066_b2?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349",
            image2: "https://images.urbndata.com/is/image/Anthropologie/4112368730044_066_b?$a15-pdp-detail-shot$&fit=constrain&fmt=webp&qlt=80&wid=640",
            name: "Asymmetric Ribbed Tank",
            price: 178.00,
            color:"pink",
            id: "c37",
            // brand:,
            // size:,
        },
        {
            image: "https://images.urbndata.com/is/image/Anthropologie/4114529100144_066_b2?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349",
            image2: "https://images.urbndata.com/is/image/Anthropologie/4114529100144_066_b?$a15-pdp-detail-shot$&fit=constrain&fmt=webp&qlt=80&wid=640",
            name: "Pilcro Knit Turtleneck Tank",
            price: 369.00,
            color:"pink",
            id: "c38",
            // brand:,
            // size:,
        },
        {
            image: "https://images.urbndata.com/is/image/Anthropologie/4130084320084_266_b15?$a15-pdp-detail-shot$&fit=constrain&fmt=webp&qlt=80&wid=640",
            image2: "https://images.urbndata.com/is/image/Anthropologie/4130084320084_266_b14?$a15-pdp-detail-shot$&fit=constrain&fmt=webp&qlt=80&wid=640",
            name: "Tie-Back Maxi Dress",
            price: 103.00,
            color:"pink",
            id: "c39",
            // brand:,
            // size:,
        },
        {
            image: "https://images.urbndata.com/is/image/Anthropologie/4112522160112_068_b2?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349",
            image2: "https://images.urbndata.com/is/image/Anthropologie/4112522160112_068_b?$a15-pdp-detail-shot$&fit=constrain&fmt=webp&qlt=80&wid=640",
            name: "The-Shoulder Flutter Top",
            price: 268.00,
            color:"pink",
            id: "c40",
            // brand:,
            // size:,
        },
        {
            image: "https://images.urbndata.com/is/image/Anthropologie/4112265640015_001_b2?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349",
            image2: "https://images.urbndata.com/is/image/Anthropologie/4112265640015_001_b?$a15-pdp-detail-shot$&fit=constrain&fmt=webp&qlt=80&wid=640",
            name: "Maeve Structured Mock Neck Top",
            price: 18.00,
            color:"black",
            id: "c41",
            // brand:,
            // size:,
        },
        {
            image: "https://images.urbndata.com/is/image/Anthropologie/4110916210121_010_b15?$a15-pdp-detail-shot$&fit=constrain&fmt=webp&qlt=80&wid=640",
            image2: "https://images.urbndata.com/is/image/Anthropologie/4110916210121_010_b?$a15-pdp-detail-shot$&fit=constrain&fmt=webp&qlt=80&wid=640",
            name: "By Anthropologie Draped Tee",
            price: 14.00,
            color:"white",
            id: "c42",
            // brand:,
            // size:,
        },
        {
            image: "https://images.urbndata.com/is/image/Anthropologie/4110916210108_011_b2?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349",
            image2: "https://images.urbndata.com/is/image/Anthropologie/4110916210108_011_b?$a15-pdp-detail-shot$&fit=constrain&fmt=webp&qlt=80&wid=640",
            name: "Cropped Utility Pullover",
            price: 20.00,
            color:"white",
            id: "c43",
            // brand:,
            // size:,
        },
        {
            image: "https://images.urbndata.com/is/image/Anthropologie/4130264840011_040_b?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349",
            image2: "https://images.urbndata.com/is/image/Anthropologie/4130264840011_040_b14?$a15-pdp-detail-shot$&fit=constrain&fmt=webp&qlt=80&wid=640",
            name: "The Somerset Mini Dress",
            price: 23.00,
            color:"blue",
            id: "c44",
            // brand:,
            // size:,
        }, 
        {
            image: "https://images.urbndata.com/is/image/Anthropologie/4120370060023_038_b2?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349",
            image2: "https://images.urbndata.com/is/image/Anthropologie/4120370060023_038_b?$a15-pdp-detail-shot$&fit=constrain&fmt=webp&qlt=80&wid=640",
            name: "Sleek A-Line Midi Skirt",
            price: 15.00,
            color:"green",
            id: "c45",
            // brand:,
            // size:,
        },
        {
            image: "https://images.urbndata.com/is/image/Anthropologie/4120084320026_030_b?$a15-pdp-detail-shot$&fit=constrain&fmt=webp&qlt=80&wid=640",
            image2: "https://images.urbndata.com/is/image/Anthropologie/4120084320026_030_b3?$a15-pdp-detail-shot$&fit=constrain&fmt=webp&qlt=80&wid=640",
            name: "Ruffled Wrap Maxi Skirt",
            price: 150.00,
            color:"green",
            id: "c46",
            // brand:,
            // size:,
        },
        {
            image: "https://images.urbndata.com/is/image/Anthropologie/68438852_034_b2?$a15-pdp-detail-shot$&fit=constrain&fmt=webp&qlt=80&wid=640",
            image2: "https://images.urbndata.com/is/image/Anthropologie/68438852_034_b?$a15-pdp-detail-shot$&fit=constrain&fmt=webp&qlt=80&wid=640",
            name: "The Way Home Shorts",
            price: 256.00,
            color:"green",
            id: "c47",
            // brand:,
            // size:,
        },
        {
            image: "https://images.urbndata.com/is/image/Anthropologie/4130578570013_030_b2?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349",
            image2: "https://images.urbndata.com/is/image/Anthropologie/4130578570013_030_b?$a15-pdp-detail-shot$&fit=constrain&fmt=webp&qlt=80&wid=640",
            name: "The Somerset Maxi Dress",
            price: 15.00,
            color:"green",
            id: "c48",
            // brand:,
            // size:,
        }, 
        {
            image: "https://images.urbndata.com/is/image/Anthropologie/4112265640015_063_b?$a15-pdp-detail-shot$&fit=constrain&fmt=webp&qlt=80&wid=640",
            image2: "https://images.urbndata.com/is/image/Anthropologie/4112265640015_063_b2?$a15-pdp-detail-shot$&fit=constrain&fmt=webp&qlt=80&wid=640",
            name: "Structured Mock Neck Top",
            price: 252.00,
            color:"red",
            id: "c49",
            // brand:,
            // size:,
        }, 
        {
            image: "https://images.urbndata.com/is/image/Anthropologie/4112916210052_062_b2?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349",
            image2: "https://images.urbndata.com/is/image/Anthropologie/4112916210052_062_b?$a15-pdp-detail-shot$&fit=constrain&fmt=webp&qlt=80&wid=640",
            name: "Smocked Puff-Sleeve Top",
            price: 658.00,
            color:"red",
            id: "c50",
            // brand:,
            // size:,
        }, 
        {
            image: "https://images.urbndata.com/is/image/Anthropologie/4111522160007_001_b2?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349",
            image2: "https://images.urbndata.com/is/image/Anthropologie/4111522160007_001_b?$a15-pdp-detail-shot$&fit=constrain&fmt=webp&qlt=80&wid=640",
            name: "Pilcro V-Neck Sweatshirt",
            price: 13.00,
            color:"black",
            id: "c51",
            // brand:,
            // size:,
        }, 
        {
            image: "https://images.urbndata.com/is/image/Anthropologie/4112449700005_046_b2?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349",
            image2: "https://images.urbndata.com/is/image/Anthropologie/4112449700005_046_b?$a15-pdp-detail-shot$&fit=constrain&fmt=webp&qlt=80&wid=640",
            name: "Layered Cutout Tank",
            price: 14.00,
            color:"blue",
            id: "c52",
            // brand:,
            // size:,
        },
        {
            image: "https://images.urbndata.com/is/image/Anthropologie/4130578570013_010_b?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349",
            image2: "https://images.urbndata.com/is/image/Anthropologie/4130578570013_010_c14?$a15-pdp-detail-shot$&fit=constrain&fmt=webp&qlt=80&wid=640",
            name: "The Somerset Maxi Dress: Linen Edition",
            price: 144.00,
            color:"white",
            id: "c53",
            // brand:,
            // size:,
        }, 
        {
            image: "https://images.urbndata.com/is/image/Anthropologie/4112609690111_010_b2?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349",
            image2: "https://images.urbndata.com/is/image/Anthropologie/4112609690111_010_b?$a15-pdp-detail-shot$&fit=constrain&fmt=webp&qlt=80&wid=640",
            name: "T.La Classic V-Neck Tee",
            price: 166.00,
            color:"white",
            id: "c54",
            // brand:,
            // size:,
        },
        {
            image: "https://images.urbndata.com/is/image/Anthropologie/4112368730048_010_b2?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349",
            image2: "https://images.urbndata.com/is/image/Anthropologie/4112368730048_010_b?$a15-pdp-detail-shot$&fit=constrain&fmt=webp&qlt=80&wid=640",
            name: "By Anthropologie Woven Ruffle Top",
            price: 236.00,
            color:"white",
            id: "c55",
            // brand:,
            // size:,
        },
        {
            image: "https://images.urbndata.com/is/image/Anthropologie/4130646420031_001_b2?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349",
            image2: "https://images.urbndata.com/is/image/Anthropologie/4130264840011_001_b2?$a15-pdp-detail-shot$&fit=constrain&fmt=webp&qlt=80&wid=640",
            name: "The Somerset Mini Dress",
            price: 368.00,
            color:"black",
            id: "c56",
            // brand:,
            // size:,
        },
    ];
    
                                            // whole array(productArr)/data added into localStorage

    localStorage.setItem("clothingLSData", JSON.stringify(productData));

                            // Now getting same data from localStorage and storing it in productArr named variable 

    let productArr = JSON.parse(localStorage.getItem("clothingLSData"));

    
    disp_prod(productArr);
    let sorting_data = document.querySelector("#sorting_opt");
    sorting_data.addEventListener("change", sorting);

                                                  // creating a function for shorting 

        function sorting() {
         let sortAs = document.querySelector("#sorting_opt").value;
         // console.log(sortAs)
            if (sortAs == "none" || sortAs == "newest" || sortAs == "bestselling") {
                disp_prod(productData);
                console.log(sortAs)
            }
            else if (sortAs == "ascending") {
                productArr.sort(function (a, b) {
                    return a.price - b.price;
                });
                disp_prod(productArr);
            }
            else if (sortAs == "descending") {
                productArr.sort(function (a, b) {
                    return b.price - a.price;
                });
                disp_prod(productArr);
            }
        };
                                                
                            // creating a function for displaying data and also creating all the element which is required fo product div
    function disp_prod(productArr) {
        document.querySelector("#product").innerHTML = "";
        productArr.forEach(function (elem) {

            let prod_count=productArr.length;
            document.querySelector("#cat_title>div>p").innerText=`${prod_count} products`;

            let div = document.createElement("div");
            
            let img = document.createElement("img");
            img.setAttribute("src", elem.image);

            img.addEventListener("mouseover",function(){
            img.setAttribute("src", elem.image2);
            });
            img.addEventListener("mouseout",function(){
            img.setAttribute("src", elem.image);
            });
            let name = document.createElement("p");
            name.innerText = elem.name;

            let currency = document.createElement("span");
            currency.innerText = "$";

            let price = document.createElement("span");
            price.innerText = elem.price;

            let br1 = document.createElement("br");

            let color1 = document.createElement("button");
            color1.setAttribute("id", "Fst_color");
            color1.setAttribute("class", "color");

            let color2 = document.createElement("button");
            color2.setAttribute("id", "Snd_color");
            color2.setAttribute("class", "color");

            let color3 = document.createElement("button");
            color3.setAttribute("id", "Trd_color");
            color3.setAttribute("class", "color");

            let div_col = document.createElement("div");
            div_col.append(color1, color2, color3);

            let button1 = document.createElement("button");
            button1.innerText = "Buy Now";
            button1.setAttribute("id", "buynow_btn");
            button1.addEventListener("click", function(){
                let invoice= elem;
                    localStorage.setItem("invoice_details", JSON.stringify(invoice));
                    window.location.href="payment.html";

            });

            let button2 = document.createElement("button");
            button2.innerText = "Add to cart";
            button2.setAttribute("id", "cart_btn");
            button2.addEventListener("click", function(){
                if(addToCart(elem.id)==true){
                    getincart();
                }
                else{
                    console.log(2)
                    alert("Product Already in the Cart")
                }
            });
            
            let div_btn=document.createElement("div");
            div_btn.setAttribute("id","purchase_btn")
            div_btn.append(button1, button2);
            document.querySelector("#product").append(div);
            div.append(img, name, currency, price, br1, div_col, div_btn);

            // function buynow(elem) {
            //         let invoice= elem.price
            //         window.location.href="payment.html";
            //         localStorage.setItem("invoice_details", JSON.stringify(invoice));
            //     // console.log(buyingItem)
            // };
            function addToCart(id){
                // console.log(id)
            cartLSdata = JSON.parse(localStorage.getItem("cart")) || [];

                for(let i=0;i<cartLSdata.length;i++){
                    if(cartLSdata[i].id==id){
                        return false;
                    }
                }
                return true;
            }
            function getincart() {
                let addedItem = {
                    image: elem.image,
                    name: elem.name,
                    price: elem.price,
                    color:elem.color,
                    size: "XS",
                    style: "# 4110916210077",
                    fit:"Standard",
                    id: elem.id,
                }
                cartLSdata.push(addedItem);
                localStorage.setItem("cart", JSON.stringify(cartLSdata));

                alert("Product added Successfully");
            };
        });
    };
            
    let expand=document.querySelectorAll(".expand_opt")
    expand.forEach(function(elem){
        elem.addEventListener("click",function(){
            elem.classList.toggle("active");
        });
    });

                                                         // For filtering content 
    let filter=document.querySelectorAll(".expand_opt"); //selecting all select button of filter
    filter.forEach(function(elem){
        elem.addEventListener("change",function(){
            let selected=elem.value;                       // storing select button value

            let filtered_arr=productArr.filter(function(elem){

                // For Price 
                if(selected==1){
                    return elem.price<25;
                }
                else if(selected==2){
                    return (elem.price>25&&elem.price<=50)
                }
                else if(selected==3){
                    return (elem.price>50&&elem.price<=100);
                }
                else if(selected==4){
                    return elem.price>100;
                }

                // For Color 
                else if(selected=="white"){
                    return elem.color=="white";
                }
                else if(selected=="blue"){
                    return elem.color=="blue";
                }
                else if(selected=="black"){
                    return elem.color=="black";
                }
                else if(selected=="green"){
                    return elem.color=="green";
                }
                else if(selected=="red"){
                    return elem.color=="red";
                }
                else if(selected=="yellow"){
                    return elem.color=="yellow";
                }
                else if(selected=="pink"){
                    return elem.color=="pink";
                }
                else{
                    return productData
                }
            })
            disp_prod(filtered_arr)
        });
    });
    
                                              //For reset button
    let reset=document.querySelector("#filter>h4");
    reset.addEventListener("click",function(){
        window.location.reload();
    });
