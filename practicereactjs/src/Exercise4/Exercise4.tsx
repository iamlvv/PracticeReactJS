import React from 'react'

type Props = {}

const styles = {
    formItem : {
        display: 'flex',
        flexDirection: 'row' as 'row',
        justifyContent: 'center',
        columnGap: '10px'
    }
}
function Exercise4({}: Props) {
    const array: string[] = ['apple', 'banana', 'tea', 'coffee'];
    const [appleChecked, setAppleChecked] = React.useState(false);
    const [bananaChecked, setBananaChecked] = React.useState(false);
    const [teaChecked, setTeaChecked] = React.useState(false);
    const [coffeeChecked, setCoffeeChecked] = React.useState(false);
  return (
    <div>
        <h2>Your Check List</h2>
        <form>
            { array.map((item, index) => {
                return <div key={index} style={styles.formItem}>
                    <input type="checkbox" id={item} name={item} value={item} onChange={(e) => {
                        if (e.target.value === 'apple') {
                            setAppleChecked(!appleChecked);
                        } else if (e.target.value === 'banana') {
                            setBananaChecked(!bananaChecked);
                        } else if (e.target.value === 'tea') {
                            setTeaChecked(!teaChecked);
                        } else if (e.target.value === 'coffee') {
                            setCoffeeChecked(!coffeeChecked);
                        }
                    }} />
                    <label htmlFor={item}>{item}</label>
                </div>
            }
            )}
        </form>
        <div>
            <h2>Items has been checked:</h2>
            <div>
                { appleChecked && <p>Apple</p> }
                { bananaChecked && <p>Banana</p> }
                { teaChecked && <p>Tea</p> }
                { coffeeChecked && <p>Coffee</p> }
            </div>
        </div>
    </div>
  )
}

export default Exercise4