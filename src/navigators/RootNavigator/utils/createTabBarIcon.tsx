import { Icons } from "@/components";

export function createTabBarIcon(routeName) {
    return ({ focused, color }) => {
      const size = 36;
  
      if (routeName === 'Home') {
        return (
          <Icons.Home
            size={size}
            color={color}
            fill={focused}
          />
        );
      }
      else if (routeName === 'Profile') {
        return (
          <Icons.Person
            size={size}
            color={color}
            fill={focused}
          />
        );
      }
      else if (routeName === 'Medications') {
        return (
          <Icons.Prescription
            size={size}
            color={color}
            fill={focused}
          />
        );
      }
      else if (routeName === 'Stock') {
        return (
          <Icons.Package
            size={size}
            color={color}
            fill={focused}
          />
        );
      }
    };
  }