# RJS Component Library Themed

(A test for now) A reactjs component library with a custom theme support by default. It's just a light / dark support with possibility to choose and change colors from both themes. Font (font family) and font size are present, but not fully implemented yet.

## Components

ThemeHandler    
Button   
Card && CardContent && CardToggle   
Checkbox  
CheckboxMulti  
Container  
FormGroup  
ImageContainer   
ImageEditor   
Input  
InputColor  
Label  
Loading  
MultiForm  
P  
Radio  
Range  
RadioMulti   
Select  
SelectAsync    
Span   
Spinner  
SpinnerCoin  
SpinnerDots  
SpinnerDotsCircle   
SpinnerRipple   
SpinnerView   
Tabs  
Textarea    
TitleH1  
TitleHn   
Toggle  
Tooltip  

## Sources

[source I](https://dev.to/alexeagleson/how-to-create-and-publish-a-react-component-library-2oe)  
[source II](https://dev.to/siddharthvenkatesh/component-library-setup-with-react-typescript-and-rollup-onj)  
[source III - Spinners](https://loading.io/css/)  
[source IV - Range](https://codepen.io/ibaslogic/pen/zYMJZaQ)  
[source V - Image Editor](https://www.npmjs.com/package/react-photo-editor) | 'no extra actions implemented'   

## ToDO

- Upgrade stories  

## Release Notes

- 0.2.0: Upgraded dependencies; MultiForm' & Tabs' header changed;  

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
//install (remember to check the peer dependencies)  
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
myLightValues.disabled =        "#DDD";
myLightValues.disabled_text =   "#DDD";
myLightValues.background = "#FFFFFF";
myLightValues.body =       "#F1F1F1";
myLightValues.border =     "#F1F1F1",
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
myDarkValues.primary =       "#1D1E26";
...
myDarkValues.custom = {};

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
        ABC
      </Button>

      <Span>ABC</Span> 
    </div>
  );
}
```

## How to maintain

1. Clone  
2. NVM use 22.13.1 (node 22.13.1 / npm 10.9.2)  
3. npm i  
4. make changes  
5. git add / git commit / git push  
6. npm run publish (custom command)
