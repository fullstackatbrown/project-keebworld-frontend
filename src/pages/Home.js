import React from "react";
import { Navigation } from '../components/Navigation';

export default function Home() {
  return (
    <div>
      <Navigation 
        switchData={switchData}
        keycapData={keycapData}
        stabilizerData={stabilizerData}
        lubricantData={lubricantData}
        pcbData={pcbData}
      />
    </div>
    
  );
}

const switchData = [
  {
    id: "0",
    info: {
      category: "Switches",
      prodName: "Cherry Blue PCP Mount 3-Pin Switches (10 pcs)",
      prodPrice: "$6.99"
    }
  },
  {
    id: "1",
    info: {
      category: "Switches",
      prodName: "Cherry MX Clear",
      prodPrice: "$6.99"
    }    
  },
  {
    id: "2",
    info: {
      category: "Switches",
      prodName: "Cherry MX Blue",
      prodPrice: "$6.99"
    }
  },
  {
    id: "3",
    info: {
      category: "Switches",
      prodName: "Cherry MX Brown",
      prodPrice: "$6.99"
    }    
  },
  {
    id: "4",
    info: {
      category: "Switches",
      prodName: "Cherry MX Red",
      prodPrice: "$6.99"
    }    
  },
  {
    id: "5",
    info: {
      category: "Switches",
      prodName: "Cherry MX Black",
      prodPrice: "$6.99"
    }    
  },
  {
    id: "6",
    info: {
      category: "Switches",
      prodName: "Buckling Spring",
      prodPrice: "$6.99"
    }    
  },
  {
    id: "7",
    info: {
      category: "Switches",
      prodName: "Cherry MX Green",
      prodPrice: "$6.99"
    }    
  }
];

const keycapData = [
  {
    id: "0",
    info: {
      category: "Keycaps",
      prodName: "Banggood 71 Keys Plum Blossom Keycap Set",
      prodPrice: "$12.99"
    }
  },
  {
    id: "1",
    info: {
      category: "Keycaps",
      prodName: "PBT Keycap 129 Keys DYE-SUB Cherry",
      prodPrice: "$12.99"
    }    
  },
  {
    id: "2",
    info: {
      category: "Keycaps",
      prodName: "Real Pink and Purple Flower and Real Leaf",
      prodPrice: "$12.99"
    }
  },
  {
    id: "3",
    info: {
      category: "Keycaps",
      prodName: "Razer - Phantom Keycap Upgrade Set",
      prodPrice: "$12.99"
    }    
  },
  {
    id: "4",
    info: {
      category: "Keycaps",
      prodName: "Solid Wood Keycaps Set, OEM & Cherry",
      prodPrice: "$12.99"
    }    
  },
  {
    id: "5",
    info: {
      category: "Keycaps",
      prodName: "Sea Coral Keycap PBT Five Sides",
      prodPrice: "$12.99"
    }    
  },
  {
    id: "6",
    info: {
      category: "Keycaps",
      prodName: "PBT double shot Botanical Keycaps",
      prodPrice: "$12.99"
    }    
  },
  {
    id: "7",
    info: {
      category: "Keycaps",
      prodName: "Steam Punk Typewriter Mechanical Keycaps",
      prodPrice: "$12.99"
    }    
  }
];

const stabilizerData = [
  {
    id: "0",
    info: {
      category: "Stabilizers",
      prodName: "Cherry Blue PCP Mount 3-Pin Switches (10 pcs)",
      prodPrice: "$3.99"
    }
  },
  {
    id: "1",
    info: {
      category: "Stabilizers",
      prodName: "Cherry Black PCP Mount 5-Pin Switches (10 pcs)",
      prodPrice: "$3.99"
    }    
  },
  {
    id: "2",
    info: {
      category: "Stabilizers",
      prodName: "GATERON RED 3-pin SWITCHES (10 switches)",
      prodPrice: "$3.99"
    }
  },
  {
    id: "3",
    info: {
      category: "Stabilizers",
      prodName: "Cherry Black PCP Mount 5-Pin Switches (10 pcs)",
      prodPrice: "$3.99"
    }    
  },
  {
    id: "4",
    info: {
      category: "Stabilizers",
      prodName: "Guava Stabilizer",
      prodPrice: "$3.99"
    }    
  },
  {
    id: "5",
    info: {
      category: "Stabilizers",
      prodName: "Apple Stabilizer",
      prodPrice: "$3.99"
    }    
  },
  {
    id: "6",
    info: {
      category: "Stabilizers",
      prodName: "Lime Stabilizer",
      prodPrice: "$3.99"
    }    
  },
  {
    id: "7",
    info: {
      category: "Stabilizers",
      prodName: "Pear Stabilizer",
      prodPrice: "$3.99"
    }    
  }
];

const lubricantData = [
  {
    id: "0",
    info: {
      category: "Lubricants",
      prodName: "Glorious PC Gaming Race G-LUBE",
      prodPrice: "$8.99"
    }
  },
  {
    id: "1",
    info: {
      category: "Lubricants",
      prodName: "Glorious PC Gaming Race G-LUBE",
      prodPrice: "$8.99"
    }    
  },
  {
    id: "2",
    info: {
      category: "Lubricants",
      prodName: "Glorious PC Gaming Race G-LUBE",
      prodPrice: "$8.99"
    }
  },
  {
    id: "3",
    info: {
      category: "Lubricants",
      prodName: "Glorious PC Gaming Race G-LUBE",
      prodPrice: "$8.99"
    }    
  },
  {
    id: "4",
    info: {
      category: "Lubricants",
      prodName: "Glorious PC Gaming Race G-LUBE",
      prodPrice: "$8.99"
    }    
  },
  {
    id: "5",
    info: {
      category: "Lubricants",
      prodName: "Glorious PC Gaming Race G-LUBE",
      prodPrice: "$8.99"
    }    
  },
  {
    id: "6",
    info: {
      category: "Lubricants",
      prodName: "Glorious PC Gaming Race G-LUBE",
      prodPrice: "$8.99"
    }    
  },
  {
    id: "7",
    info: {
      category: "Lubricants",
      prodName: "Glorious PC Gaming Race G-LUBE",
      prodPrice: "$8.99"
    }    
  }
];

const pcbData = [
  {
    id: "0",
    info: {
      category: "PCBs",
      prodName: "Glorious PC Gaming Race G-LUBE",
      prodPrice: "$7.99"
    }
  },
  {
    id: "1",
    info: {
      category: "PCBs",
      prodName: "Pain27 PCB or USB-C Kit",
      prodPrice: "$7.99"
    }    
  },
  {
    id: "2",
    info: {
      category: "PCBs",
      prodName: "KBD75 Rev 2.0 Soldered PCB",
      prodPrice: "$7.99"
    }
  },
  {
    id: "3",
    info: {
      category: "PCBs",
      prodName: "96 RGB PCB Plate",
      prodPrice: "$7.99"
    }    
  },
  {
    id: "4",
    info: {
      category: "PCBs",
      prodName: "Let's Split Keyboard PCB",
      prodPrice: "$7.99"
    }    
  },
  {
    id: "5",
    info: {
      category: "PCBs",
      prodName: "Gk64x RGB Hot Swap Programmable Wired Case PCB",
      prodPrice: "$7.99"
    }    
  },
  {
    id: "6",
    info: {
      category: "PCBs",
      prodName: "GH60 PCB 60%",
      prodPrice: "$7.99"
    }    
  },
  {
    id: "7",
    info: {
      category: "PCBs",
      prodName: "DZ60 60% Layout PCB",
      prodPrice: "$7.99"
    }    
  }
];
