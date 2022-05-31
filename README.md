# RJS Component Library Themed

A reactjs component library with a custom theme support by default. This is a test for now.  
Testing with steled-components for know.  


## Sources
[source I](https://dev.to/alexeagleson/how-to-create-and-publish-a-react-component-library-2oe)  
[source II](https://dev.to/siddharthvenkatesh/component-library-setup-with-react-typescript-and-rollup-onj)

## Testing

```
npm run test
```

## Storybook

```
npm run sb
```

## Installing

```
//check the peer dependencies
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
  Button,
  initialThemeValues,
  Span,
  ThemeContext
} from '@gadeoli/rjs-component-library-themed';

//set all initialThemeValues
const testThemeValues = {...initialThemeValues};

testThemeValues.primary =    "#1D1E26";  
testThemeValues.secondary =  "#FCCC29";
...
testThemeValues.fontSize.text =       12;

function App() {
  return (
    <div>
      <ThemeContext.Consumer>
        {({setTheme}) => { setTheme(testThemeValues); return <></>; }}
      </ThemeContext.Consumer>

      <Button onClick={() => console.log('hey')} disabled={false}>
        <Span>ABC</Span>
      </Button> 
    </div>
  );
}
```