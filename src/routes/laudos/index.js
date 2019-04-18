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
          
        })
        .catch(err => console.error('deu ruim'+err))
      
        
    }
    render(){

    
        return(
<div>
            <nav class="navbar navbar-dark bg-info">
            <a class="navbar-brand" href="#">
              <img src="/assets/img/perfil.jpg" width="30" height="30" class="d-inline-block align-top" alt=""/>
                  PIXEL - Laudos Web
            </a>
          </nav>
            <div class="container">


                {
                    ! isEmpty(this.state.laudos) && 
                this.state.laudos.map(laudos =>(
                   
                       
                    <div class="w-25 float-left"><a href={URL+laudos.path} target="_blank">
                         <img  src={URL+laudos.path} class=" img-thumbnail "/>
                    </a></div>
                  

                ))

                
                }
    
    </div>
</div>

        )
    }
}
    
export default Laudos;
