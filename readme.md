# React Native Demo Project (Expo SDK 58)

A starter and demo project structure for building modern cross-platform mobile applications using **React Native** and **Expo SDK 58**. This template is pre-configured with **TypeScript**, **NativeWind (Tailwind CSS)** for styling, **React Native Reanimated**, and code quality tools (**ESLint** & **Prettier**).

---

## 🚀 Tech Stack

| Technology | Version | Description |
| :--- | :--- | :--- |
| **Expo** | `^58.0.0` (SDK 58) | Universal React app framework and tooling |
| **React Native** | `0.88.0` | Cross-platform native mobile application framework |
| **React** | `19.3.0` | UI library with modern features |
| **TypeScript** | `~6.0.3` | Static typing and enhanced developer experience |
| **NativeWind** | `latest` (v4) | Tailwind CSS utility-first styling for React Native |
| **Tailwind CSS** | `^3.4.0` | Utility CSS engine powering NativeWind |
| **React Native Reanimated** | `4.7.1` | Native thread animations |
| **React Native Safe Area Context** | `~5.10.1` | Handling safe area boundaries across devices |

---

## 📁 Project Structure

Below is an overview of the directory structure:

```text
home_finder/
├── assets/                  # Static assets (icons, splash screen, favicon)
│   ├── adaptive-icon.png    # Android adaptive app icon
│   ├── favicon.png          # Web browser favicon
│   ├── icon.png             # iOS and generic app icon
│   └── splash.png           # Splash launch screen image
├── components/              # Reusable UI components
│   ├── EditScreenInfo.tsx   # Helper info component for screen editing
│   └── ScreenContent.tsx    # Starter screen layout and container component
├── .gitignore               # Git ignored directories and files
├── App.tsx                  # Application entry point component
├── app.json                 # Expo configuration (name, splash, icons, orientation)
├── babel.config.js          # Babel preset and plugin configuration
├── global.css               # Global Tailwind CSS directives (@tailwind base, etc.)
├── metro.config.js          # Metro bundler config with NativeWind integration
├── nativewind-env.d.ts      # NativeWind TypeScript type definitions
├── package.json             # Project dependencies and script commands
├── prettier.config.js       # Prettier formatting config with Tailwind sorting
├── readme.md                # Project documentation
├── tailwind.config.js       # Tailwind CSS design system configuration
└── tsconfig.json            # TypeScript compiler configuration
```

---

## 🧩 Components Overview (`components/`)

The `components/` directory is designed to house reusable, modular UI components. The initial template includes the following starter components:

### 1. `ScreenContent.tsx`
- **Location**: [`components/ScreenContent.tsx`](components/ScreenContent.tsx)
- **Role**: Serves as a standard container for screens, displaying the header title, app branding hints, a visual divider separator, and developer instructions.
- **Props**:
  - `title` (`string`): The heading text displayed at the top of the screen.
  - `path` (`string`): The relative path of the file being edited (passed to `EditScreenInfo`).
  - `children` (`React.ReactNode`, optional): Any child components or elements to render inside the container.
- **Styling**: Styled using NativeWind classes via `styles` object (`items-center flex-1 justify-center bg-white`, `text-xl font-bold`, etc.).

### 2. `EditScreenInfo.tsx`
- **Location**: [`components/EditScreenInfo.tsx`](components/EditScreenInfo.tsx)
- **Role**: Renders an onboarding info box showing developers which file to modify to begin customizing the screen, with automated live reload / fast refresh reminders.
- **Props**:
  - `path` (`string`): File path to highlight inside the instruction card.
- **Styling**: Uses responsive, centered text styling and highlighted code badge containers using NativeWind utility classes.

### 💡 Adding New Components
When creating new components in `components/`:
1. Create your component file, e.g., `components/Button.tsx` or `components/Card.tsx`.
2. Utilize Tailwind CSS classes via the `className` prop:
   ```tsx
   import React from 'react';
   import { Text, TouchableOpacity } from 'react-native';

   interface ButtonProps {
     title: string;
     onPress: () => void;
   }

   export const CustomButton: React.FC<ButtonProps> = ({ title, onPress }) => {
     return (
       <TouchableOpacity
         className="bg-blue-600 px-5 py-3 rounded-xl active:bg-blue-700"
         onPress={onPress}
       >
         <Text className="text-white font-semibold text-center text-base">{title}</Text>
       </TouchableOpacity>
     );
   };
   ```
3. The component path `components/**/*.{js,ts,tsx}` is already registered in [`tailwind.config.js`](tailwind.config.js).

---

## ⚙️ Configuration Files

- **[`app.json`](app.json)**: Expo configuration file containing app name, slug, orientation, splash screen background, and mobile icons.
- **[`tailwind.config.js`](tailwind.config.js)**: Configures Tailwind's content scan paths (`./App.{js,ts,tsx}`, `./components/**/*.{js,ts,tsx}`) and applies the `nativewind/preset`.
- **[`metro.config.js`](metro.config.js)**: Configures Metro bundler wrapped with `withNativeWind` pointing to `./global.css`.
- **[`babel.config.js`](babel.config.js)**: Includes `babel-preset-expo`, `nativewind/babel`, and the `react-native-worklets/plugin` for Reanimated.
- **[`global.css`](global.css)**: Root CSS importing Tailwind utility layers.

---

## 🛠️ Getting Started

### Prerequisites
- [Node.js](https://nodejs.org/) (LTS recommended)
- [Expo Go](https://expo.dev/go) app installed on your physical iOS/Android device, or an Android Emulator / iOS Simulator.

### Installation
Install project dependencies:
```bash
npm install
```

### Running the App
Start the Expo development server:
```bash
npx expo start
```
or
```bash
npm start
```

### Platform Commands
| Command | Platform / Action |
| :--- | :--- |
| `npm run android` | Launch on connected Android device / emulator |
| `npm run ios` | Launch on iOS simulator (macOS required) |
| `npm run web` | Launch web preview in browser |
| `npm run lint` | Run ESLint and check Prettier formatting |
| `npm run format` | Automatically fix ESLint and Prettier issues |

---

## 🏷️ Renaming the App

To change the default project name from `app_name`:
1. Update `name` in [`package.json`](package.json).
2. Update `name` and `slug` under `expo` in [`app.json`](app.json).
3. Update any display titles in [`App.tsx`](App.tsx) and [`components/ScreenContent.tsx`](components/ScreenContent.tsx).
