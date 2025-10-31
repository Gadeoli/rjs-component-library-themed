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
Input  
InputColor
Jumbotron     
Label  
Loading  
MultiForm  
P  
Radio  
Range  
RadioMulti   
Select  
SelectAsync   
SelectCreatable  
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


## ToDO

- Upgrade stories  


## ToFix

- CardToggle Initial Blink


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


## How to maintain (Dev with bad memory)

1. Clone  
2. NVM use 22.13.1 (node 22.13.1 / npm 10.9.2)  
3. npm i  
4. make changes  
5. git add / git commit / git push  
6. npm run publish (custom command)


## Example
- Check /components/Test/App4Text.tsx  
- You can than implement your logic, using dinamic values (store, api), custom initial mode etc.