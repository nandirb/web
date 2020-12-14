import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import BobaControls from '../bobaControls/bobaControls'
export default class Boba extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            size:"",
            turul:"",
            toppings:"",
            date: new Date()
        };
        this.turulSongoh = this.turulSongoh.bind(this)
        this.sizeSongoh = this.sizeSongoh.bind(this)
        this.typeSongoh = this.typeSongoh.bind(this)

      }
    turulSongoh(props){
        this.setState( {
            turul: this.props})
    }
    sizeSongoh(props){
        this.setState( {
            size: this.props})
    }
    typeSongoh(props){
        this.setState( {
            toppings: this.props})
    }
    render(){
        const {turulSongoh, sizeSongoh, typeSongoh} = this.state
        console.log(this.state)
        return (
            <div>
                <BobaControls turulSongoh={this.turulSongoh} sizeSongoh={this.sizeSongoh} typeSongoh={this.typeSongoh}/>
                <strong>ЗАХИАЛГА ӨГӨХ</strong>
                <IconButton color="primary" aria-label="add to shopping cart">
                     <AddShoppingCartIcon />
                </IconButton>
            </div>
        )
    }
}