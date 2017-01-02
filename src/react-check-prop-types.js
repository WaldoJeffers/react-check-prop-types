export default Component => {
  const displayName = Component.displayName || Component.name
  return class extends Component{
    static displayName = displayName;
    constructor(props){
      super(props)
      Object.keys(props).forEach(prop => {
        if (!Component.propTypes[prop]){
          console.error(`Warning: Failed prop type: \`${displayName}\` component has no \`${prop}\` prop.`)
        }
      })
    }
  }
}
