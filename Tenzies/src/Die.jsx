function Die(props) {
    const {value, isHeld, holdDice} = props

    const styles = {
        backgroundColor: isHeld ? "#59E391" : "white"
    }
    return (
        <div 
            className="die"
            style={styles}
            onClick={holdDice}
        >
                {value}
        </div>
    )
} 

export default Die