# react-check-prop-types
[![Dependency Status](https://img.shields.io/david/WaldoJeffers/react-check-prop-types.svg?style=flat-square)](https://david-dm.org/WaldoJeffers/react-check-prop-types)

## Description
A small [higher order component](https://medium.com/@franleplant/react-higher-order-components-in-depth-cf9032ee6c3e#.2q6bfgfp8) which helps you better [check your props](https://facebook.github.io/react/docs/typechecking-with-proptypes.html). This HoC will raise an error in the console if you pass a component a prop which is not defined in its `propTypes`.

## Installation
With npm :
```bash
npm install react-check-prop-types
```

## Usage
### As a function
```js
import checkPropTypes from 'react-check-prop-types'

class Component extends React.Component{
...
}
export default checkPropTypes(Component)
```

### As an ES7 decorator
```js
import checkPropTypes from 'react-check-prop-types'

@checkPropTypes
export default class Component extends React.Component{
...
}
```

## Examples
