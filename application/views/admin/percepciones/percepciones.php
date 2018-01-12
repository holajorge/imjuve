   <style type="text/css">
  
   	.error{
			display: none;
			margin-left: 10px;
		}		
		
		.error_show{
			color: red;
			margin-left: 10px;
		}
   </style>

   <div class="row  border-bottom white-bg dashboard-header">
	    <div class="col-xs-12 col-sm-8 col-md-6 col-sm-offset-2 col-md-offset-3">
			<form role="form" id="formPercepcion">
				<h2>Registro de Percepciones</small></h2>
				<hr class="colorgraph">
				<div class="row">
					<div class="col-xs-12 col-sm-4 col-md-4">
						<div class="form-group ">
							<label for="indicador">Indicador</label>
	                        <input type="text" name="indicador" id="perception_indicador" class="form-control input-lg" tabindex="1" onblur="verificarIndicador()">
	                        <span  class="error">This field is required</span>
						</div>
					</div>
					<div class="col-xs-12 col-sm-6 col-md-9">
						<div class="form-group">
							<label for="nombre">Nombre Percepcion</label>
	                        <input type="text" name="nombre" id="perception_nombre" class="form-control input-lg" tabindex="2">
	                        <span class="error">This field is required</span>
						</div>
					</div>

					<div class="col-xs-12 col-sm-6 col-md-9">
						<div class="form-group">
							<label for="tipo">Tipo Percepcion</label>
	                        <input type="text" name="tipo" id="perception_tipo" class="form-control input-lg"  tabindex="3">
	                        <span class="error">This field is required</span>
						</div>
					</div>					
				</div>
				
				<hr class="colorgraph">
				<div class="row">
					<div class="col-xs-12 col-md-4" id="perception_submint">
						<input type="button"  value="Registrar" class="btn btn-primary btn-block btn-lg" tabindex="4" onclick="savePercepcion();">
					</div>
				</div>
			</form>
		</div>
	 </div>

