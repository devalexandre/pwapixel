import { h, Component } from 'preact';
import { API, URL } from '../../config';
import axios from 'axios';
import { isEmpty } from 'lodash';

class Laudos extends Component {

    constructor(){
        super();

        this.state = {
            laudos:[],
            key:''
        }
    }

    componentDidMount(){
        const vm = this;
      
      

        axios.get(API+localStorage.getItem('key'))
        .then( (res) =>{ 
            vm.setState({laudos:res.data})
            console.log(res.data)
        })
        .catch(err => console.error('deu ruim'+err))
      
        
    }
    render(){

    
        return(

            <div class="container">
    <div class="table-responsive mt-5">
        <table class="table">
            <thead>
                <tr>
                    <th>Nome: </th>
                    <th></th>
                </tr>
            </thead>
            <tbody>

                {
                    ! isEmpty(this.state.laudos) && 
                this.state.laudos.map(laudos =>(
                    <tr>
                    <td><a href={URL+laudos.path} target="_blank">{laudos.file}</a></td>
                    <td><a class="btn btn-primary" role="button" href={URL+laudos.path} download={API+laudos.path}>Baixar&nbsp;<i class="fa fa-arrow-circle-down"></i></a></td>
                </tr>

                ))

                
                }
             
                
                <tr></tr>
            </tbody>
        </table>
    </div>
</div>

        )
    }
}
    
export default Laudos;
