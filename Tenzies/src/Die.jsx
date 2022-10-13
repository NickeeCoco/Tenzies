function Die(props) {
    const {id, value, isHeld, holdDice} = props

    const styles = {
        backgroundColor: isHeld ? "#59E391" : "white"
    }
    return (
        <div 
            className="die"
            style={styles}
            onClick={() => holdDice(id)}
        >
                {value}
        </div>
    )
} 

export default Die