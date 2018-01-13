<div class="wrapper wrapper-content animated fadeInRight">
    <div class="row">
        <div class="col-lg-12">
            <div class="ibox float-e-margins">
                <div class="ibox-content">                   
                  <div class="table-responsive">
                        <table class="table table-striped table-bordered table-hover dataTables-example" id="tabla_lista_empleados">
                            <thead>
                                <tr>                                    
                                    <th class="text-center">indicador</th>
                                    <th class="text-center">Nombre</th>
                                    <th class="text-center">Tipo</th>
                                    <th class="text-center">Acciones</th>   
                                </tr>
                            </thead>
                            <tbody>
                                <?php foreach ($percepciones as  $percepcion): ?>
                                    <tr class="gradeA">
                                        <td><label  id="indicador<?php echo $percepcion->id_percepcion ?>"><?php echo  $percepcion->indicador ?></label></td> 
                                        <td><label  id="nombre<?php echo $percepcion->id_percepcion ?>"><?php echo $percepcion->nombre?></label></td>
                                        <td> <label  id="tipo<?php echo $percepcion->id_percepcion ?>"><?php echo $percepcion->tipo?></label></td>  
                                        <td class="text-center">
                                            <button type="button" class="btn btn-danger" onclick="deletePercepcion('<?php echo $percepcion->id_percepcion ?>')">Eliminar</button>                                  
                                            <button class="btn btn-info" onclick="editPercepcion('<?php echo $percepcion->id_percepcion ?>')" data-toggle="modal" data-target="#editarPercepcion">Editar</button>                                                               
                                        </td>                                    
                                    </tr>                                
                                <?php endforeach ?>
                            </tbody>                            
                        </table>
                  </div>
                </div>
            </div>
        </div>
    </div>
</div>

<!-- Modal -->
<div class="modal fade" id="editarPercepcion" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
        <h4 class="modal-title" id="myModalLabel">Editar Percepciones</h4>        
      </div>
      <div class="modal-body">
        <form role="form" id="formPercepcionEditar">
            <input type="hidden" name="id" id="idEditar" value="">
                <div class="row">
                    <div class="col-xs-12 col-sm-4 col-md-4">
                        <div class="form-group ">
                            <label for="indicador">Indicador</label>
                            <input type="text" name="indicador" id="indicadorEditar" class="form-control input-lg" tabindex="1">
                        </div>
                    </div>
                    <div class="col-xs-12 col-sm-6 col-md-9">
                        <div class="form-group">
                            <label for="nombre">Nombre Percepcion</label>
                            <input type="text" name="nombre" id="nombreEditar" class="form-control input-lg" tabindex="2">
                        </div>
                    </div>
                    <div class="col-xs-12 col-sm-6 col-md-9">
                        <div class="form-group">
                            <label for="tipo">Tipo Percepcion</label>
                            <input type="text" name="tipo" id="tipoEditar" class="form-control input-lg"  tabindex="3">
                        </div>
                    </div>                                     
                </div>                
        </form>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-default" data-dismiss="modal">Cancelar</button>
        <button type="button" class="btn btn-primary" tabindex="5" onclick="savePercepcionEdit()">Guardar Cambios</button>
      </div>
    </div>
  </div>
</div>