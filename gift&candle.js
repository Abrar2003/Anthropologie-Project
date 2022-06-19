                                // JS For Gift Page 

                                                  // Array of object manually created 

    let productData = [
        {
            image: "https://images.urbndata.com/is/image/Anthropologie/65166043_040_b2?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349",
            image2: "https://images.urbndata.com/is/image/Anthropologie/65166043_040_b?$a15-pdp-detail-shot$&fit=constrain&fmt=webp&qlt=80&wid=640",
            name: "Classic Taper Candles, Set of 4",
            price: 98.00,
            color:"blue",
            type:"candle",
            id: "g1",
            // size:,
        },
        {
            image: "https://images.urbndata.com/is/image/Anthropologie/66769613_049_b2?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349",
            image2: "https://images.urbndata.com/is/image/Anthropologie/66769613_049_b?$a15-pdp-detail-shot$&fit=constrain&fmt=webp&qlt=80&wid=640",
            name: "Heart-Shaped Drop Necklace",
            price: 78.00,
            color:"blue",
            type:"arom",
            id: "g2",
            // size:,
        },
        {
            image: "https://images.urbndata.com/is/image/Anthropologie/65817611_040_b?$a15-pdp-detail-shot$&fit=constrain&fmt=webp&qlt=80&wid=540",
            image2: "https://images.urbndata.com/is/image/Anthropologie/65817611_040_b2?$a15-pdp-detail-shot$&fit=constrain&fmt=webp&qlt=80&wid=640", 
            name: "Melamine Serving Platter",
            price: 42.00,
            color:"blue",
            type:"dinner",
            id: "g55",
            // size:,
        },
        {
            image: "https://images.urbndata.com/is/image/Anthropologie/48097422_070_b10?$a15-pdp-detail-shot$&fit=constrain&fmt=webp&qlt=80&wid=640",
            image2: "https://images.urbndata.com/is/image/Anthropologie/48097422_070_b4?$a15-pdp-detail-shot$&fit=constrain&fmt=webp&qlt=80&wid=640",
            name: "Grecian Bust Pot",
            price: 44.00,
            color:"white",
            type:"arom",
            id: "g3",
            // size:,
        },
        {
            image: "https://images.urbndata.com/is/image/Anthropologie/67311886_102_b2?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349",
            image2: "https://images.urbndata.com/is/image/Anthropologie/67311373_102_b3?$a15-pdp-detail-shot$&fit=constrain&fmt=webp&qlt=80&wid=640",  
            name: "Vendima Kids Blanket ",
            price: 31.00,
            color:"blue",
            type:"kids",
            id: "g4",
            // size:,
        },
        {
            image: "https://images.urbndata.com/is/image/Anthropologie/61318838_030_b2?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349",
            image2: "https://images.urbndata.com/is/image/Anthropologie/61318838_030_b?$a15-pdp-detail-shot$&fit=constrain&fmt=webp&qlt=80&wid=640",
            name: "Dani Play Mat",
            price: 28.00,
            color:"green",
            type:"kids",
            id: "g5",
            // size:,
        },
        {
            image: "https://images.urbndata.com/is/image/Anthropologie/58028085_001_b2?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349",
            image2: "https://images.urbndata.com/is/image/Anthropologie/58028085_001_b?$a15-pdp-detail-shot$&fit=constrain&fmt=webp&qlt=80&wid=640", 
            name: "Black Jar Candle",
            price: 29.00,
            color:"black",
            type:"candle",
            id: "g6",
            // size:,
        },
        {
            image: "https://images.urbndata.com/is/image/Anthropologie/49216096_072_b10?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349",
            image2: "https://images.urbndata.com/is/image/Anthropologie/49216096_042_b14?$a15-pdp-detail-shot$&fit=constrain&fmt=webp&qlt=80&wid=640",
            name: "Fragrances Eau De Parfum",
            price: 188.00,
            color:"black",
            type:"arom",
            id: "g7",
            // size:,
        },
        {
            image: "https://images.urbndata.com/is/image/Anthropologie/64574262_040_b?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349",
            image2: "https://images.urbndata.com/is/image/Anthropologie/64574262_040_b2?$a15-pdp-detail-shot$&fit=constrain&fmt=webp&qlt=80&wid=640", 
            name: "Stroller Caddy",
            price: 130.00,
            color:"blue",
            type:"kids",
            id: "g56",
            // size:,
        },
        {
            image: "https://images.urbndata.com/is/image/Anthropologie/78263522_001_b2?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349",
            image2: "https://images.urbndata.com/is/image/Anthropologie/78263522_001_b?$a15-pdp-detail-shot$&fit=constrain&fmt=webp&qlt=80&wid=640",
            name: "Hugo 3-in-1 Air Purifier",
            price: 38.00,
            color:"black",
            type:"arom",
            id: "g8",
            // size:,
        },
        {
            image: "https://images.urbndata.com/is/image/Anthropologie/65512972_050_b?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349",
            image2: "https://images.urbndata.com/is/image/Anthropologie/65512972_237_b?$a15-pdp-detail-shot$&fit=constrain&fmt=webp&qlt=80&wid=640",
            name: "Bombay & Cedar Essential Oil Blend",
            price: 218.00,
            color:"white",
            type:"arom",
            id: "g9",
            // size:,
        },
        {
            image: "https://images.urbndata.com/is/image/Anthropologie/64772890_072_b2?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349",
            image2: "https://images.urbndata.com/is/image/Anthropologie/64772890_072_b4?$a15-pdp-detail-shot$&fit=constrain&fmt=webp&qlt=80&wid=640",  
            name: "Talon Raincoat",
            price: 90.00,
            color:"yellow",
            type:"kids",
            id: "g10",
            // size:,
        },
        {
            image: "https://images.urbndata.com/is/image/Anthropologie/67188540_270_b11?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349",
            image2: "https://images.urbndata.com/is/image/Anthropologie/67188540_270_b?$a15-pdp-detail-shot$&fit=constrain&fmt=webp&qlt=80&wid=640", 
            name: "Barr-Co. Apothecary Jar Candle",
            price: 400.00,
            color:"yellow",
            type:"candle",
            id: "g11",
            // size:,
        },
        {
            image: "https://images.urbndata.com/is/image/Anthropologie/45362452AW_071_b?$a15-pdp-detail-shot$&fit=constrain&fmt=webp&qlt=80&wid=640",
            image2: "https://images.urbndata.com/is/image/Anthropologie/45362452AW_071_b2?$a15-pdp-detail-shot$&fit=constrain&fmt=webp&qlt=80&wid=640",   
            name: "The Romy Relaxed Buttondown",
            price: 326.00,
            color:"yellow",
            type:"dinner",
            id: "g12",
            // size:,
        },
        {
            image: "https://images.urbndata.com/is/image/Anthropologie/62362462_001_b?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349",
            image2: "https://images.urbndata.com/is/image/Anthropologie/62362462_001_b10?$a15-pdp-detail-shot$&fit=constrain&fmt=webp&qlt=80&wid=640",
            name: "Franka Candelabra",
            price: 382.00,
            color:"yellow",
            type:"candle",
            id: "g13",
            // size:,
        },
        {
            image: "https://images.urbndata.com/is/image/Anthropologie/45549381AA_010_b?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349",
            image2: "https://images.urbndata.com/is/image/Anthropologie/45549381AA_010_b10?$a15-pdp-detail-shot$&fit=constrain&fmt=webp&qlt=80&wid=640", 
            name: "Moyencourt Taper Candlestick",
            price: 325.00,
            color:"yellow",
            type:"candle",
            id: "g14",
            // size:,
        },
        {
            image: "https://images.urbndata.com/is/image/Anthropologie/45548988AA_030_b?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349",
            image2: "https://images.urbndata.com/is/image/Anthropologie/45548988AA_030_b10?$a15-pdp-detail-shot$&fit=constrain&fmt=webp&qlt=80&wid=640",
            name: "Alpine Glass Taper Candlestick",
            price: 246.00,
            color:"yellow",
            type:"candle",
            id: "g15",
            // size:,
        },
        {
            image: "https://images.urbndata.com/is/image/Anthropologie/53258919_014_b2?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349",
            image2: "https://images.urbndata.com/is/image/Anthropologie/53258919_014_b?$a15-pdp-detail-shot$&fit=constrain&fmt=webp&qlt=80&wid=640",
            name: "Olli Ella Bayu Changing Basket",
            price: 196.00,
            color:"yellow",
            type:"kids",
            id: "g16",
            // size:,
        },
        {
            image: "https://images.urbndata.com/is/image/Anthropologie/70258496_010_b10?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349",
            image2: "https://images.urbndata.com/is/image/Anthropologie/70258496_010_b?$a15-pdp-detail-shot$&fit=constrain&fmt=webp&qlt=80&wid=640",
            name: "Alo Magnesium Reset Spray",
            price: 248.00,
            color:"yellow",
            type:"arom",
            id: "g17",
            // size:,
        },
        {
            image: "https://images.urbndata.com/is/image/Anthropologie/45549373AA_016_b?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349",
            image2: "https://images.urbndata.com/is/image/Anthropologie/45549373AA_016_b10?$a15-pdp-detail-shot$&fit=constrain&fmt=webp&qlt=80&wid=640", 
            name: "Cambria Candle Holder",
            price: 180.00,
            color:"white",
            type:"candle",
            id: "g18",
            // size:,
        },
        {
            image: "https://images.urbndata.com/is/image/Anthropologie/65166043_001_b2?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349",
            image2: "https://images.urbndata.com/is/image/Anthropologie/65166043_001_b?$a15-pdp-detail-shot$&fit=constrain&fmt=webp&qlt=80&wid=640",  
            name: "Classic Taper Candles, Set of 4",
            price: 60.00,
            color:"black",
            type:"candle",
            id: "g19",
            // size:,
        },
        {
            image: "https://images.urbndata.com/is/image/Anthropologie/66522236_060_b?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349",
            image2: "https://images.urbndata.com/is/image/Anthropologie/66522236_060_b14?$a15-pdp-detail-shot$&fit=constrain&fmt=webp&qlt=80&wid=640",
            name: "August Wren Lobster Platter",
            price: 98.00,
            color:"red",
            type:"dinner",
            id: "g20",
            // size:,
        },
        {
            image: "https://images.urbndata.com/is/image/Anthropologie/66061284_096_b?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349",
            image2: "https://images.urbndata.com/is/image/Anthropologie/66061284_096_a?$a15-pdp-detail-shot$&fit=constrain&fmt=webp&qlt=80&wid=640", 
            name: "Heritage Baking Dishes, Set of 4",
            price: 98.00,
            color:"red",
            type:"dinner",
            id: "g21",
            // size:,
        },
        {
            image: "https://images.urbndata.com/is/image/Anthropologie/45447783AA_060_b2?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349",
            image2: "https://images.urbndata.com/is/image/Anthropologie/45447783AA_060_b?$a15-pdp-detail-shot$&fit=constrain&fmt=webp&qlt=80&wid=640",  
            name: "Flatwoven Tiger Bath Mat",
            price: 246.00,
            color:"red",
            type:"arom",
            id: "g22",
            // size:,
        },
        {
            image: "https://images.urbndata.com/is/image/Anthropologie/63849269_069_b2?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349",
            image2: "https://images.urbndata.com/is/image/Anthropologie/63849269_030_b10?$a15-pdp-detail-shot$&fit=constrain&fmt=webp&qlt=80&wid=640", 
            name: "Jacquard Pot Holder",
            price: 148.00,
            color:"red",
            type:"kids",
            id: "g23",
            // size:,
        },
        {
            image: "https://images.urbndata.com/is/image/Anthropologie/43769355_060_b2?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349",
            image2: "https://images.urbndata.com/is/image/Anthropologie/43769355_027_b10?$a15-pdp-detail-shot$&fit=constrain&fmt=webp&qlt=80&wid=640",
            name: "Giant Japonica Jar Candle",
            price: 498.00,
            color:"red",
            type:"candle",
            id: "g24",
            // size:,
        },
        {
            image: "https://images.urbndata.com/is/image/Anthropologie/65817520_000_b?$a15-pdp-detail-shot$&fit=constrain&fmt=webp&qlt=80&wid=640",
            image2: "https://images.urbndata.com/is/image/Anthropologie/65817520_000_b2?$a15-pdp-detail-shot$&fit=constrain&fmt=webp&qlt=80&wid=640",
            name: "Melamine Serving Bowl",
            price: 298.00,
            color:"red",
            type:"dinner",
            id: "g25",
            // size:,
        },
        {
            image: "https://images.urbndata.com/is/image/Anthropologie/69007102_010_b11?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349",
            image2: "https://images.urbndata.com/is/image/Anthropologie/69007102_010_b?$a15-pdp-detail-shot$&fit=constrain&fmt=webp&qlt=80&wid=640",
            name: "Multitasky Spa Humidifier Lamp",
            price: 35.00,
            color:"green",
            type:"arom",
            id: "g26",
            // size:,
        },
        {
            image: "https://images.urbndata.com/is/image/Anthropologie/68778208_237_b?$a15-pdp-detail-shot$&fit=constrain&fmt=webp&qlt=80&wid=640",
            image2: "https://images.urbndata.com/is/image/Anthropologie/68778208_237_b2?$a15-pdp-detail-shot$&fit=constrain&fmt=webp&qlt=80&wid=640", 
            name: "Portable Bottle Humidifier",
            price: 58.00,
            color:"green",
            type:"arom",
            id: "g27",
            // size:,
        },
        {
            image: "https://images.urbndata.com/is/image/Anthropologie/69007144_010_b2?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349",
            image2: "https://images.urbndata.com/is/image/Anthropologie/69007144_010_b?$a15-pdp-detail-shot$&fit=constrain&fmt=webp&qlt=80&wid=640",   
            name: " Bottle Floating Humidifier",
            price: 68.00,
            color:"green",
            type:"arom",
            id: "g28",
            // size:,
        },
        {
            image: "https://images.urbndata.com/is/image/Anthropologie/76004118_000_b?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349",
            image2: "https://images.urbndata.com/is/image/Anthropologie/76004126_000_b?$a15-pdp-detail-shot$&fit=constrain&fmt=webp&qlt=80&wid=640",
            name: "Kids Lagoon Star Swim Cap",
            price: 48.00,
            color:"blue",
            type:"kids",
            id: "g29",
            // size:,
        },
        {
            image: "https://images.urbndata.com/is/image/Anthropologie/62623772_001_b?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349",
            image2: "https://images.urbndata.com/is/image/Anthropologie/62645247_001_b?$a15-pdp-detail-shot$&fit=constrain&fmt=webp&qlt=80&wid=640", 
            name: "Black Reed Diffuser",
            price: 22.00,
            color:"black",
            rtpe:"candle",
            id: "g30",
            // size:,
        },
        {
            image: "https://images.urbndata.com/is/image/Anthropologie/53580700_066_b2?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349",
            image2: "https://images.urbndata.com/is/image/Anthropologie/53580700_066_b?$a15-pdp-detail-shot$&fit=constrain&fmt=webp&qlt=80&wid=640",
            name: "Mini Newborn Baby Carrier",
            price: 88.00,
            color:"pink",
            type:"kids",
            id: "g31",
            // size:,
        },
        {
            image: "https://images.urbndata.com/is/image/Anthropologie/45548960AA_014_b2?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349",
            image2: "https://images.urbndata.com/is/image/Anthropologie/45548960AA_014_b?$a15-pdp-detail-shot$&fit=constrain&fmt=webp&qlt=80&wid=640",   
            name: "Sculptural Taper Candlestick",
            price: 169.00,
            color:"pink",
            type:"candle",
            id: "g32",
            // size:,
        },
        {
            image: "https://images.urbndata.com/is/image/Anthropologie/67899625_066_b2?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349",
            image2: "https://images.urbndata.com/is/image/Anthropologie/67899625_000_b?$a15-pdp-detail-shot$&fit=constrain&fmt=webp&qlt=80&wid=640",   
            name: "Rainbow Large-Stone Necklace",
            price: 179.00,
            color:"pink",
            type:"arom",
            id: "g33",
            // size:,
        },
        {
            image: "https://images.urbndata.com/is/image/Anthropologie/45541485AA_066_b?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349",
            image2: "https://images.urbndata.com/is/image/Anthropologie/45541485AA_066_b10?$a15-pdp-detail-shot$&fit=constrain&fmt=webp&qlt=80&wid=640",
            name: "Carmo Vase",
            price: 88.00,
            color:"pink",
            type:"arom",
            id: "g34",
            // size:,
        },
        {
            image: "https://images.urbndata.com/is/image/Anthropologie/48703565_066_b11?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349",
            image2: "https://images.urbndata.com/is/image/Anthropologie/48703565_066_b?$a15-pdp-detail-shot$&fit=constrain&fmt=webp&qlt=80&wid=640",   
            name: "Waterfall Flutes, Set of 4",
            price: 178.00,
            color:"pink",
            type:"dinner",
            id: "g35",
            // size:,
        },
        {
            image: "https://images.urbndata.com/is/image/Anthropologie/62319983_066_b2?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349",
            image2: "https://images.urbndata.com/is/image/Anthropologie/62319983_066_b?$a15-pdp-detail-shot$&fit=constrain&fmt=webp&qlt=80&wid=640",    
            name: "Delaney Candlestick",
            price: 369.00,
            color:"pink",
            type:"candle",
            id: "g36",
            // size:,
        },
        {
            image: "https://images.urbndata.com/is/image/Anthropologie/65889115_053_b10?$a15-pdp-detail-shot$&fit=constrain&fmt=webp&qlt=80&wid=640",
            image2: "https://images.urbndata.com/is/image/Anthropologie/40723009_066_b2?$a15-pdp-detail-shot$&fit=constrain&fmt=webp&qlt=80&wid=640",
            name: "Briar Dinner Plate",
            price: 103.00,
            color:"pink",
            type:"dinner",
            id: "g37",
            // size:,
        },
        {
            image: "https://images.urbndata.com/is/image/Anthropologie/68836600_066_b2?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349",
            image2: "https://images.urbndata.com/is/image/Anthropologie/68836600_066_b?$a15-pdp-detail-shot$&fit=constrain&fmt=webp&qlt=80&wid=640", 
            name: "Parisian Bunny Bath Towel",
            price: 268.00,
            color:"pink",
            type:"kids",
            id: "g38",
            // size:,
        },
        {
            image: "https://images.urbndata.com/is/image/Anthropologie/65517112_001_b2?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349",
            image2: "https://images.urbndata.com/is/image/Anthropologie/65517112_001_b?$a15-pdp-detail-shot$&fit=constrain&fmt=webp&qlt=80&wid=640",  
            name: "Faux Leather Clamshell Clutch",
            price: 18.00,
            color:"black",
            type:"arom",
            id: "g39",
            // size:,
        },
        {
            image: "https://images.urbndata.com/is/image/Anthropologie/45362452AY_010_b?$a15-pdp-detail-shot$&fit=constrain&fmt=webp&qlt=80&wid=640",
            image2: "https://images.urbndata.com/is/image/Anthropologie/45362452AY_010_b14?$a15-pdp-detail-shot$&fit=constrain&fmt=webp&qlt=80&wid=640",  
            name: "Mini Matte Latte Bowls, Set of 4",
            price: 14.00,
            color:"white",
            type:"dinner",
            id: "g40",
            // size:,
        },
        {
            image: "https://images.urbndata.com/is/image/Anthropologie/68912047_040_b?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349",
            image2: "https://images.urbndata.com/is/image/Anthropologie/68911999_011_b11?$a15-pdp-detail-shot$&fit=constrain&fmt=webp&qlt=80&wid=640",  
            name: "Hooded Bath Robe",
            price: 20.00,
            color:"white",
            type:"kids",
            id: "g41",
            // size:,
        },
        {
            image: "https://images.urbndata.com/is/image/Anthropologie/53740551_099_b?$a15-pdp-detail-shot$&fit=constrain&fmt=webp&qlt=80&wid=640",
            image2: "https://images.urbndata.com/is/image/Anthropologie/53740551_099_b2?$a15-pdp-detail-shot$&fit=constrain&fmt=webp&qlt=80&wid=640",
            name: "Levi Mug",
            price: 23.00,
            color:"blue",
            type:"arom",
            id: "g42",
            // size:,
        }, 
        {
            image: "https://images.urbndata.com/is/image/Anthropologie/62008644_066_b?$a15-pdp-detail-shot$&fit=constrain&fmt=webp&qlt=80&wid=640",
            image2: "https://images.urbndata.com/is/image/Anthropologie/62008644_066_b2?$a15-pdp-detail-shot$&fit=constrain&fmt=webp&qlt=80&wid=640",   
            name: "Elegant Humidifier Lamp",
            price: 15.00,
            color:"green",
            type:"arom",
            id: "g43",
            // size:,
        },
        {
            image: "https://images.urbndata.com/is/image/Anthropologie/45362452AW_034_b?$a15-pdp-detail-shot$&fit=constrain&fmt=webp&qlt=80&wid=640",
            image2: "https://images.urbndata.com/is/image/Anthropologie/45362452AY_034_b?$a15-pdp-detail-shot$&fit=constrain&fmt=webp&qlt=80&wid=540",
            name: "Matte Latte Bowls, Set of 4",
            price: 150.00,
            color:"green",
            type:"dinner",
            id: "g44",
            // size:,
        },
        {
            image: "https://images.urbndata.com/is/image/Anthropologie/65671810_030_b10?$a15-pdp-detail-shot$&fit=constrain&fmt=webp&qlt=80&wid=6400",
            image2: "https://images.urbndata.com/is/image/Anthropologie/65671810_030_b?$a15-pdp-detail-shot$&fit=constrain&fmt=webp&qlt=80&wid=640",
            name: "Melamine Side Plate",
            price: 256.00,
            color:"green",
            type:"dinner",
            id: "g45",
            // size:,
        },
        {
            image: "https://images.urbndata.com/is/image/Anthropologie/76080001_037_b2?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349",
            image2: "https://images.urbndata.com/is/image/Anthropologie/76080001_037_b?$a15-pdp-detail-shot$&fit=constrain&fmt=webp&qlt=80&wid=640",  
            name: "Beach Dad Mouse Toy",
            price: 15.00,
            color:"green",
            type:"kids",
            id: "g46",
            // size:,
        }, 
        {
            image: "https://images.urbndata.com/is/image/Anthropologie/69955946_060_b2?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349",
            image2: "https://images.urbndata.com/is/image/Anthropologie/69955946_060_b?$a15-pdp-detail-shot$&fit=constrain&fmt=webp&qlt=80&wid=640",  
            name: "Carson Taper Candlestick Holder",
            price: 252.00,
            color:"red",
            type:"candle",
            id: "g47",
            // size:,
        }, 
        {
            image: "https://images.urbndata.com/is/image/Anthropologie/59169763_069_b2?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349",
            image2: "https://images.urbndata.com/is/image/Anthropologie/59169763_069_b?$a15-pdp-detail-shot$&fit=constrain&fmt=webp&qlt=80&wid=640", 
            name: "Play Center",
            price: 658.00,
            color:"red",
            type:"kids",
            id: "g48",
            // size:,
        }, 
        {
            image: "https://images.urbndata.com/is/image/Anthropologie/45544621AA_001_b1?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349",
            image2: "https://images.urbndata.com/is/image/Anthropologie/45544621AA_001_b10?$a15-pdp-detail-shot$&fit=constrain&fmt=webp&qlt=80&wid=640",
            name: "Victoria Taper Candlestick",
            price: 13.00,
            color:"black",
            type:"candle",
            id: "g49",
            // size:,
        }, 
        {
            image: "https://images.urbndata.com/is/image/Anthropologie/68885573_040_b2?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349",
            image2: "https://images.urbndata.com/is/image/Anthropologie/68885573_040_b?$a15-pdp-detail-shot$&fit=constrain&fmt=webp&qlt=80&wid=640", 
            name: "Rhino Stuffed Animal",
            price: 14.00,
            color:"blue",
            type:"kids",
            id: "g50",
            // size:,
        },
        {
            image: "https://images.urbndata.com/is/image/Anthropologie/45549465AA_004_b?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349",
            image2: "https://images.urbndata.com/is/image/Anthropologie/45549465AA_004_b11?$a15-pdp-detail-shot$&fit=constrain&fmt=webp&qlt=80&wid=640",
            name: "Capricio Votive Candle Holder",
            price: 144.00,
            color:"white",
            type:"candle",
            id: "g51",
            // size:,
        }, 
        {
            image: "https://images.urbndata.com/is/image/Anthropologie/65718025_066_b11?$a15-pdp-detail-shot$&fit=constrain&fmt=webp&qlt=80&wid=640",
            image2: "https://images.urbndata.com/is/image/Anthropologie/65718025_066_b2?$a15-pdp-detail-shot$&fit=constrain&fmt=webp&qlt=80&wid=640", 
            name: "Reese Mug",
            price: 166.00,
            color:"white",
            type:"dinner",
            id: "g52",
            // size:,
        },
        {
            image: "https://images.urbndata.com/is/image/Anthropologie/51471274_072_b?$a15-pdp-detail-shot$&fit=constrain&fmt=webp&qlt=80&wid=640",
            image2: "https://images.urbndata.com/is/image/Anthropologie/51471274_072_b2?$a15-pdp-detail-shot$&fit=constrain&fmt=webp&qlt=80&wid=640",  
            name: "Garden Tile Dinner Plate",
            price: 236.00,
            color:"white",
            type:"dinner",
            id: "g53",
            // size:,
        },
        {
            image: "https://images.urbndata.com/is/image/Anthropologie/45540068AA_020_b?$a15-pdp-detail-shot$&fit=constrain&fmt=webp&qlt=80&wid=640",
            image2: "https://images.urbndata.com/is/image/Anthropologie/45540068AA_020_b2?$a15-pdp-detail-shot$&fit=constrain&fmt=webp&qlt=80&wid=640",
            name: "Delaney Candlestick",
            price: 368.00,
            color:"black",
            type:"candle",
            id: "g54",
            // size:,
        },
    ];
    
                                            // whole array(productArr)/data added into localStorage

    localStorage.setItem("clothingLSData", JSON.stringify(productData));

                            // Now getting same data from localStorage and storing it in productArr named variable 

    let productArr = JSON.parse(localStorage.getItem("clothingLSData"));
    let cartLSdata = JSON.parse(localStorage.getItem("cart")) || [];
    
    
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
            // alert()
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

            function buynow() {
                let buyingItem = {
                    Price: elem.price
                }
                // console.log(buyingItem)
            };
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
                    color: elem.color,
                    id: elem.id,
                    size: "M",
                    style: "# 67587972",
                    fit:  "Standard",   
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
    let filter=document.querySelectorAll(".expand_opt");
    let reset=document.querySelector("#filter>h4");
    reset.addEventListener("click",function(){
        window.location.reload();
    })
    filter.forEach(function(elem){
        elem.addEventListener("change",function(){
            let selected=elem.value;

            let filtered_arr=productArr.filter(function(elem){

                // For Product type 
                if(selected=="arom"){
                    return elem.type=="arom"
                }
                if(selected=="kids"){
                    return elem.type=="kids";
                }
                if(selected=="candle"){
                    return elem.type=="candle";
                }
                if(selected=="dinner"){
                    return elem.type=="dinner";
                }
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
                    return productData;
                }
            })
            let prod_count=filtered_arr.length;
            document.querySelector("#cat_title>div>p").innerText=`${prod_count} products`;
            disp_prod(filtered_arr)
        });
    });
