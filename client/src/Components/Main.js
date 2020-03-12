import React, {Component} from 'react';
import Dish from './Dish'
import Title from './Title'
import DishList from './EventListener'
import AddDish from './AddDish'

class Main extends Component {
    render() {
        return( <div>
                   
                   <Title/>
                  
                                
                   <DishList/>
                   <AddDish/>
                 </div>
                    
        )
    }
}

export default Main