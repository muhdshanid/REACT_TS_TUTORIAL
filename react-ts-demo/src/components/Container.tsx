type ContainerProps = {
    styles: React.CSSProperties
}
const Container = ({styles}: ContainerProps) => {
  return (
    <div style={styles}>
        Text content here
    </div>
  )
}

export default Container