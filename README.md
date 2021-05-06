# news-app

## Get Started

### Required tools
- [Node.js](https://nodejs.org/en/)
- [Yarn](https://classic.yarnpkg.com/en/docs/install/#mac-stable)
- (iOS) Mac with Xcode
- (Android) Android Studio

## Setup

### 1. Clone repository
### 2. Install packages with 
```
yarn install
```
> Run this command in the project root directory

#### For iOS
Open terminal to iOS folder with
```
cd ./ios
```

Install pods
```
pod install
```

### 3. Run project

#### iOS 
```
react-native run-ios
```
#### Android
```
react-native run-android
```
## Changes To BWC News Link

### 1. Open Project In IDE
### 2. Navigate To The Index File
```
news-app/src/scenes/home/index.js
```
>Navigate to this file in your IDE to make edits
### 3. Making Changes
#### Find this code: 

```
const url = 'http://news.brickwallcyber.com/'
```
> Edit the link to change where the user will be redirected.

```
<Text style={styles.sectionTitle}>{"News"}</Text>
```
> Edit the text "News" to be what you want your title to say

#### Making Style Changes (Optional):

```
<Button
    onPress={onPressOpenLink}
    title="Brick Wall Cyber Login"
    // ***Change this color to suit your color pallet***
    color= "#DFE0F1"
    // ***
/>
```
>Change ```color = "#DFE0F1"``` to be a color than suits your color pallet

```
const styles = StyleSheet.create({
```
>Change the styles, located at the end of the file to suit your personal preferences

### 3. Changing The Color scheme

#### Navigate to this file:

```
news-app/src/styles/colors
```
>Change the colors here for your primary and secondary colors plus others if need be.
