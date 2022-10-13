function Die(props) {
    const {id, value, isHeld} = props

    const styles = {
        backgroundColor: isHeld ? "#59E391" : "white"
    }
    return (
        <div 
            className="die"
            style={styles}
        >
                {value}
        </div>
    )
} 

export default Die