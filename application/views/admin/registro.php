


   <div class="row  border-bottom white-bg dashboard-header">
	    <div class="col-xs-12 col-sm-8 col-md-6 col-sm-offset-2 col-md-offset-3">
			<form role="form" id="form_crear_empleado">
				<h2>Registro de Empleados</small></h2>
				<hr class="colorgraph">
				<div class="row">
					<div class="col-xs-12 col-sm-6 col-md-3 ">
						<div class="form-group ">
							<label for="num_plaza">Num. Plaza</label>
	                        <input type="text" name="num_plaza" id="num_plaza" class="form-control input-lg" placeholder="" tabindex="1">
						</div>
					</div>
					<div class="col-xs-12 col-sm-6 col-md-9">
						<div class="form-group">
							<label for="nombre">Nombre</label>
	                        <input type="text" name="nombre" id="nombre" class="form-control input-lg" placeholder="" tabindex="2">
						</div>
					</div>
					<div class="col-xs-12 col-sm-6 col-md-6">
						<div class="form-group">
							<label for="ape_paterno">Apellido Paterno</label>
							<input type="text" name="ape_paterno" id="ape_paterno" class="form-control input-lg" placeholder="" tabindex="3">
						</div>
					</div>
					<div class="col-xs-12 col-sm-6 col-md-6">
						<div class="form-group">
							<label for="ape_materno">Apellido Materno</label>
							<input type="text" name="ape_materno" id="ape_materno" class="form-control input-lg" placeholder="" tabindex="4">
						</div>
					</div>
					<div class="col-xs-12 col-sm-6 col-md-6">
						<div class="form-group">
							<label for="fecha_nacimiento">Fecha de Nacimiento</label>
							<input type="date" name="fecha_nacimiento" id="fecha_nacimiento" class="form-control input-lg" placeholder="" tabindex="5">
						</div>
					</div>
					<div class="col-xs-12 col-sm-6 col-md-6">
						<div class="form-group">
							<label for="fecha_ingreso">Fecha de Ingreso</label>
							<input type="date" name="fecha_ingreso" id="fecha_ingreso" class="form-control input-lg" placeholder="" tabindex="6">
						</div>
					</div>
					<div class="col-xs-12 col-sm-6 col-md-6">
						<div class="form-group">
							<label for="curp">CURP</label>
							<input type="text" name="curp" id="curp" class="form-control input-lg" placeholder="" tabindex="7">
						</div>
					</div>
					<div class="col-xs-12 col-sm-6 col-md-6">
						<div class="form-group">
							<label for="rfc">RFC</label>
							<input type="text" name="rfc" id="rfc" class="form-control input-lg" placeholder="" tabindex="8">
						</div>
					</div>
					<div class="col-xs-12 col-sm-6 col-md-6 ">
						<div class="form-group ">
							<label for="num_empleado">Num. Empleado</label>
	                        <input type="text" name="num_empleado" id="num_empleado" class="form-control input-lg" placeholder="" tabindex="9">
						</div>
					</div>
					<div class="col-xs-12 col-sm-6 col-md-6">
						<div class="form-group">
							<label for="depto">Departamento</label>
							<select class="form-control input-lg" id="depto" name="depto" tabindex="10">
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
							<label for="puesto">Puesto</label>
							<select class="form-control input-lg" id="puesto" name="puesto" tabindex="11">
								<option value="" selected disabled hidden>Seleccione Puesto</option>
								<?php
			                  		foreach ($puestos as $fila) {
			                 	?>
			                 		<option value="<?php echo $fila->id_puesto ?>"> <?php echo $fila->nombre ?></option>
			           			<?php } ?> 
							</select>
						</div>
					</div>

					<div class="col-xs-12 col-sm-6 col-md-6">
						<div class="form-group">
							<label for="tipo_trabajador">Puesto</label>
							<select class="form-control input-lg" id="tipo_trabajador" name="tipo_trabajador" tabindex="11">
								<option value="" selected disabled hidden>Seleccione Tipo de Empleado</option>
								<?php
			                  		foreach ($tipo_trabajador as $fila) {
			                 	?>
			                 		<option value="<?php echo $fila->id_tipo_trabajador ?>"> <?php echo $fila->nombre_tipo_trabajador ?></option>
			           			<?php } ?> 
							</select>
						</div>
					</div>
					
				</div>
				
				<hr class="colorgraph">
				<div class="row">
					<div class="col-xs-12 col-md-6">
						<a href="" id="btn_guardar_empleado" class="btn btn-primary btn-block btn-lg" tabindex="12" onclick="guardar_empleado(event);">Registrar</a>
					</div>
				</div>
			</form>
		</div>
	 </div>
	
	

	