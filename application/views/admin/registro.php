


   <div class="row  border-bottom white-bg dashboard-header">
	    <div class="col-xs-12 col-sm-8 col-md-6 col-sm-offset-2 col-md-offset-3">
			<form role="form">
				<h2>Registro de Empleados</small></h2>
				<hr class="colorgraph">
				<div class="row">
					<div class="col-xs-12 col-sm-6 col-md-3 ">
						<div class="form-group ">
	                        <input type="text" name="num_empleado" id="num_empleado" class="form-control input-lg" placeholder="No. Empleado." tabindex="1">
						</div>
					</div>
					<div class="col-xs-12 col-sm-6 col-md-9">
						<div class="form-group">
	                        <input type="text" name="nombre" id="nombre" class="form-control input-lg" placeholder="Nombre" tabindex="2">
						</div>
					</div>
					<div class="col-xs-12 col-sm-6 col-md-6">
						<div class="form-group">
							<input type="text" name="ape_paterno" id="ape_paterno" class="form-control input-lg" placeholder="Apellido Paterno" tabindex="3">
						</div>
					</div>
					<div class="col-xs-12 col-sm-6 col-md-6">
						<div class="form-group">
							<input type="text" name="ape_materno" id="ape_materno" class="form-control input-lg" placeholder="Apellido Materno" tabindex="4">
						</div>
					</div>
					<div class="col-xs-12 col-sm-6 col-md-6">
						<div class="form-group">
							<input type="email" name="email" id="email" class="form-control input-lg" placeholder="Email" tabindex="5">
						</div>
					</div>
					<div class="col-xs-12 col-sm-6 col-md-6">
						<div class="form-group">
							<input type="date" name="fecha_nacimiento" id="fecha_nacimiento" class="form-control input-lg" placeholder="Fecha Nacimiento" tabindex="6">
						</div>
					</div>
					<div class="col-xs-12 col-sm-6 col-md-6">
						<div class="form-group">
							<input type="text" name="curp" id="curp" class="form-control input-lg" placeholder="CURP" tabindex="7">
						</div>
					</div>
					<div class="col-xs-12 col-sm-6 col-md-6">
						<div class="form-group">
							<input type="text" name="rfc" id="rfc" class="form-control input-lg" placeholder="RFC" tabindex="8">
						</div>
					</div>
					<div class="col-xs-12 col-sm-6 col-md-6">
						<div class="form-group">
							<select class="form-control input-lg" tabindex="9">
								<option value="" selected disabled hidden>Seleccione Departamento</option>
								<?php
			                  		foreach ($deptos as $fila) {
			                 	?>
			                 		<option value="<?php echo $fila->id_depto ?>"> <?php echo $fila->nombre ?></option>
			           			<?php } ?> 
							</select>
						</div>
					</div>
					<div class="col-xs-12 col-sm-6 col-md-6">
						<div class="form-group">
							<select class="form-control input-lg" tabindex="10">
								<option value="" selected disabled hidden>Seleccione Puesto</option>
								<?php
			                  		foreach ($puestos as $fila) {
			                 	?>
			                 		<option value="<?php echo $fila->id_puesto ?>"> <?php echo $fila->nombre ?></option>
			           			<?php } ?> 
							</select>
						</div>
					</div>
					
				</div>
				
				<hr class="colorgraph">
				<div class="row">
					<div class="col-xs-12 col-md-6">
						<input type="submit" value="Register" class="btn btn-primary btn-block btn-lg" tabindex="7" onclick="guardar_empleado();">
					</div>
				</div>
			</form>
		</div>
	 </div>
	
	

	