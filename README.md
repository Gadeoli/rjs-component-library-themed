# RJS Component Library Themed

A reactjs component library with a custom theme support by default. This is a test for now.  
Testing with steled-components for know.  

## Components
ThemeHandler    
Button   
Checkbox  
CheckboxMulti  
Card && CardContent  
ImageContainer    
Input  
Loading  
P  
Span  
Textarea  
TitleH1  
TitleHn   
Toggle  

## Sources
[source I](https://dev.to/alexeagleson/how-to-create-and-publish-a-react-component-library-2oe)  
[source II](https://dev.to/siddharthvenkatesh/component-library-setup-with-react-typescript-and-rollup-onj)

## Testing

```
npm run test
```

## Storybook ( not properly configured )

```
npm run sb
```

## Installing

```
//intall (remember to check the peer dependencies
npm i @gadeoli/rjs-component-library-themed
```

```
// index.js (or similar)
import { 
  ThemeHandler
} from '@gadeoli/rjs-component-library-themed';

root.render(
    <ThemeHandler>
      <App />
    </ThemeHandler>
);
```

```
// App.js (or similar)
import { 
  darkThemeKey,
  lightThemeKey,
  ThemeContext,
  themeValuesPattern,
  
  GlobalStyle,
  Card,
  CardContent,
  Button,
  Span,
  Toggle
} from '@gadeoli/rjs-component-library-themed';

// set all initialValues
// specify light values: 
const myLightValues = {...themeValuesPattern};
myLightValues.primary =       "#1D1E26";  
myLightValues.primary_text =  "#FFF";
myLightValues.secondary =     "#FCCC29";
myLightValues.secondary_text ="#000";
myLightValues.success =       "#ACF39D";
myLightValues.success_text =  "#1D1E26";
myLightValues.danger =        "#E85F5C";
myLightValues.danger_text =   "#FFF";
myLightValues.background = "#FFFFFF";
myLightValues.body =       "#F1F1F1";
myLightValues.link =       "#0000EE";
myLightValues.outline =    "#FF7F50";
myLightValues.text =       "#333333";
myLightValues.fonts.primary =   "Roboto Condensed";
myLightValues.fonts.secondary = "Roboto Condensed";
//rem values are used
myLightValues.fontSize.title =      "2";
myLightValues.fontSize.subtitle =   "1.5";
myLightValues.fontSize.text =       "1";
myLightValues.custom = {};

// specify dark values: 
const myDarkValues = {...themeValuesPattern};
myLightValues.primary =       "#1D1E26";
...
myLightValues.custom = {};

function App() {
  return (
    <div>
      <ThemeContext.Consumer>
        {({mode, theme, setMode, setDarkValues, setLightValues}) => { 
            setDarkValues(myDarkValues);
            setLightValues(myLightValues);

            return <>
                <GlobalStyle />
                <Card style={styles.card}>
                    <CardContent style={styles.card.content}>
                        <Span style={styles.toggle.text}>Current theme: {mode}</Span>
                        <Toggle 
                            value={mode}
                            checkedValue={lightThemeKey}
                            uncheckedValue={darkThemeKey}
                            onChange={(value: any) => {
                                setMode(value);
                            }}
                        />
                    </CardContent>
                </Card>
            </>;
        }}
      </ThemeContext.Consumer>

      <Button onClick={() => console.log('hey')} disabled={false}>
        <Span>ABC</Span>
      </Button> 
    </div>
  );
}
```