import { h, Component } from 'preact';
import { API } from '../../config';
import axios from 'axios';

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
      
       const headers =  {
            'Access-Control-Allow-Origin': '*',
            'Content-Type': 'application/json',
          };


        axios(API,{
            method:'POST', 
            mode: 'no-cors',
             headers: {
            'Access-Control-Allow-Origin': '*',
            'Content-Type' : 'application/x-www-form-urlencoded; charset=UTF-8'
          }},{ codigo: localStorage.getItem('key')})
        .then( (res) =>{ 
            vm.setState({laudos:res.data})
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
                { this.state.laudos.map(laudos =>(
                    <tr>
                    <td><a href={API+laudos.path} target="_blank">{laudos.file}</a></td>
                    <td><a class="btn btn-primary" role="button" href={API+laudos.path} download={API+laudos.path}>Baixar&nbsp;<i class="fa fa-arrow-circle-down"></i></a></td>
                </tr>

                ))}
                
                <tr></tr>
            </tbody>
        </table>
    </div>
</div>

        )
    }
}
    
export default Laudos;
