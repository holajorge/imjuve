   <div class="row  border-bottom white-bg dashboard-header">
	    <div class="col-xs-12 col-sm-8 col-md-6 col-sm-offset-2 col-md-offset-3">
			<form role="form" id="formPercepcion">
				<h2>Registro de Percepciones</small></h2>
				<hr class="colorgraph">
				<div class="row">
					<div class="col-xs-12 col-sm-6 col-md-3 ">
						<div class="form-group ">
	                        <input type="text" name="indicador" id="indicador" class="form-control input-lg" placeholder="Inidcador." tabindex="1">
						</div>
					</div>
					<div class="col-xs-12 col-sm-6 col-md-9">
						<div class="form-group">
	                        <input type="text" name="nombre" id="nombre" class="form-control input-lg" placeholder="Nombre Percepcion" tabindex="2">
						</div>
					</div>

					<div class="col-xs-12 col-sm-6 col-md-6">
						<div class="form-group">
	                        <input type="text" name="tipo" id="tipo" class="form-control input-lg" placeholder="Tipo Percepcion" tabindex="3">
						</div>
					</div>
					
				</div>
				
				<hr class="colorgraph">
				<div class="row">
					<div class="col-xs-12 col-md-6">
						<input type="button" value="Register" class="btn btn-primary btn-block btn-lg" tabindex="4" onclick="savePercepcion(event);">
					</div>
				</div>
			</form>
		</div>
	 </div>