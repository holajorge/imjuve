<div class="wrapper wrapper-content animated fadeInRight">
	<div class="col-lg-12">
        <div class="ibox float-e-margins">
            <div class="ibox-content">
            	<!-- tabs -->
            	<div id="myTabs">

				  <!-- Nav tabs -->
				  <ul class="nav nav-tabs" role="tablist">
				    <li role="presentation" class="active"><a href="#home" aria-controls="home" role="tab" data-toggle="tab">Seleccionar empleado</a></li>
				    <li role="presentation"><a href="#det_nomina" aria-controls="det_nomina" role="tab" data-toggle="tab">Detalle de nómina</a></li>
				  </ul>

				  <!-- Tab panes -->
				  <div class="tab-content">

				  	<!-- Pestaña seleccionar empleado -->
				    <div role="tabpanel" class="tab-pane active" id="home">
				    	<div class="margin-top"></div>
					    <form class="form-inline" id="form_busc_emp_nom">
						  <div class="form-group">
						    <label for="buscar_emp_nom">RFC</label>
						    <input type="text" class="form-control " id="buscar_emp_nom" placeholder="">
						  </div>
						  <button type="button" class="btn btn-primary" onclick="buscar_emp_nomina(event);">BUSCAR</button>
						</form>
						<div id="resultado_emp_nomina">
							  
						</div>
					</div>
					
					<!-- Pestaña detalle de nómina -->
				    <div role="tabpanel" class="tab-pane" id="det_nomina">
				    	<div class="margin-top"></div>
				    	<!-- **************************************************** -->
				    	<div id="encabezado_nomina_1">
				    		
				    	</div>
				    	<!-- **************************************************** -->
				    	<!-- modal -->
							<!-- Button trigger modal -->
						<button type="button" class="btn btn-primary" data-toggle="modal" data-target="#myModal" onclick="lista_percepciones();">
						  Agregar percepciones
						</button>

						<!-- Modal -->
						<div class="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
						  <div class="modal-dialog" role="document">
						    <div class="modal-content">
						      <div class="modal-header">
						        <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
						        <h4 class="modal-title" id="myModalLabel">Modal title</h4>
						      </div>
						      <div class="modal-body" id="lista_percepciones">
						        <!-- ÁREA DE PERCEPCIONES -->
						      </div>
						      <div class="modal-footer">
						        <button type="button" class="btn btn-default" data-dismiss="modal">Cancelar</button>
						        <button type="button" class="btn btn-primary" onclick="addPercepcionesAnomina();">Agregar</button>
						      </div>
						    </div>
						  </div>
						</div>
		            	<!-- fin modal -->

		            	<table class="table table-bordered table-striped" id="id_tab_per">
		            		<thead>
		            			<tr>
		            				<th COLSPAN="4" class="text-center success">PERCEPCIONES</th>
		            			</tr>
			                    <tr class="warning">
			                    	<th style="display: none;">ID</th>
			                        <th>INDICADOR</th>
			                        <th>DESCRIPCIÓN</th>
			                        <th>IMPORTE</th>
			                        <th>TIPO</th>
			                    </tr>
		                    </thead>
		 					<tbody id="body_tabla_percepciones">
							  
							</tbody>
							<tfoot>
		                    	<tr>
			                        <th COLSPAN="2">TOTAL</th>
			                        <th id="total_percepcion"></th>
			                    </tr>
		                    </tfoot>
						</table>

						<!-- *********************************************************************** -->
						<!-- modal -->
							<!-- Button trigger modal -->
						<button type="button" class="btn btn-primary" data-toggle="modal" data-target="#modal_deducciones" onclick="lista_deducciones();">
						  Agregar deducciones
						</button>

						<!-- Modal -->
						<div class="modal fade" id="modal_deducciones" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
						  <div class="modal-dialog" role="document">
						    <div class="modal-content">
						      <div class="modal-header">
						        <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
						        <h4 class="modal-title" id="myModalLabel">Modal title</h4>
						      </div>
						      <div class="modal-body" id="lista_deducciones">
						        <!-- ÁREA DE DEDUCCIONES -->
						      </div>
						      <div class="modal-footer">
						        <button type="button" class="btn btn-default" data-dismiss="modal">Cancelar</button>
						        <button type="button" class="btn btn-primary" onclick="addDeduccionAnomina();">Agregar</button>
						      </div>
						    </div>
						  </div>
						</div>
		            	<!-- fin modal -->
						<!-- *********************************************************************** -->
						<table class="table table-bordered table-striped" id="id_tab_ded">
		            		<thead>
		            			<tr>
		            				<th COLSPAN="4" class="text-center success">DEDUCCIONES</th>
		            			</tr>
			                    <tr class="warning">
			                    	<th style="display: none;">ID</th>
			                        <th>INDICADOR</th>
			                        <th>DESCRIPCIÓN</th>
			                        <th>IMPORTE</th>
			                        <th>ELIMINAR</th>
			                    </tr>
		                    </thead>
		 					<tbody id="body_tabla_deducciones">
							  
							</tbody>
							<tfoot>
		                    	<tr>
			                        <th COLSPAN="2">TOTAL</th>
			                        <th id="total_deducciones"></th>
			                    </tr>
		                    </tfoot>
						</table>
						<button type="button" class="btn btn-primary" onclick="guardar_datos_nomina();">
						  guardar
						</button>
					</div>
				  </div>

				</div>
            	<!-- fin tabs -->
            	
            	
            </div>
        </div>
    </div>
</div>

