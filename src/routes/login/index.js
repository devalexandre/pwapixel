import { h, Component } from 'preact';
import linkState from 'linkstate';
import { set } from 'idb-keyval';
import { route } from 'preact-router';


class Login extends Component{


	constructor(){
		super()
		this.state = {
			codigo: ''
		}

	
    this.handleSubmit = this.handleSubmit.bind(this);
	}



	handleSubmit = (event) =>{
		event.preventDefault();
		set('key', this.state.codigo);

		route('/laudos/'+this.state.codigo, true);
	//	console.log('codigo',this.state.codigo);
	}  

	render(props,state){
		return(

			<div className="container-fluid">
		<div className="row mh-100vh">
			<div
				className="col-10 col-sm-8 col-md-6 col-lg-6 offset-1 offset-sm-2 offset-md-3 offset-lg-0 align-self-center d-lg-flex align-items-lg-center align-self-lg-stretch bg-white p-5 rounded rounded-lg-0 my-5 my-lg-0"
				id="login-block"
			>
				<div className="m-auto w-lg-75 w-xl-50">
					<h2 className="text-info font-weight-light mb-5"><i className="fas fa-user-md" />&nbsp;Laudos Web
					</h2>
					<form onSubmit={this.handleSubmit}>
						<div className="form-group">
							<label className="text-secondary">Codigo Do Cliente</label>
							<input value={this.state.codigo} onInput={linkState(this, 'codigo')}
								className="form-control" type="text" id="codigo" required="required"
							
							/>
						</div>
						<button className="btn btn-info mt-2" role="button" type="submit"
							id="entrar" 
						>Entrar</button></form>
					<p className="mt-3 mb-0" />
				</div>
			</div>
			<div className="col-lg-6 d-flex align-items-end" id="bg-block"
				style="background-image: url(&quot;assets/img/perfil.jpg&quot;);background-size: cover;background-position: center;"
			>
				<p className="ml-auto small text-dark mb-2"><em>IndevWeb</em></p>
			</div>
		</div>
	</div>
		)
	}
}


export default Login;
