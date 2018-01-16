<div class="wrapper wrapper-content animated fadeInRight">
    <div class="row">
        <div class="col-lg-12">
            <div class="ibox float-e-margins">
                <div class="ibox-content">
                  <div class="table-responsive">
                        <table class="table table-striped table-bordered table-hover dataTables-example" id="tabla_lista_empleados">
                            <thead>
                                <tr>                                    
                                    <th>Nombre</th>  
                                    <th>Direccion</th>                                     
                                    <th class="text-center">Acciones</th>   
                                </tr>
                            </thead>
                            <tbody>
                                <?php foreach ($deptos as  $depto): ?>
                                    <tr class="gradeA">         
                                        <td><label  id="nombre<?php echo $depto->id_depto ?>"><?php echo  $depto->nombre ?></label></td> 
                                        <td><label  id="direccion<?php echo $depto->id_depto ?>"><?php echo $depto->direccion ?></label></td>                                       
                                        <td class="text-center">
                                            <button type="button" class="btn btn-danger" onclick="deleteDepto('<?php echo $depto->id_depto ?>')">Eliminar</button>
                                            <button class="btn btn-info" onclick="editDepto('<?php echo $depto->id_depto ?>')" data-toggle="modal" data-target="#editarDepto">Editar</button>                                                               
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
<div class="modal fade" id="editarDepto" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
        <h4 class="modal-title" id="myModalLabel">Editar Repartamento</h4>        
      </div>
      <div class="modal-body">
        <form role="form" id="formDeptoEditar">
            <input type="hidden" name="id" id="idEditar" value="">
                <div class="row">
                    <div class="col-xs-12 col-sm-6 col-md-6">
                        <div class="form-group ">
                            <label for="nombre">Nombre Departamento</label>
                            <input type="text" name="nombre" id="nombreEditar" class="form-control input-lg" tabindex="1">
                        </div>
                    </div>
                    <div class="col-xs-12 col-sm-6 col-md-6">
                        <div class="form-group">
                            <label for="puesto">Direccion</label>
                            <select class="form-control input-lg" id="direccionEditar" name="direccion">
                                <option selected disabled hidden>Seleccione Direccion</option>
                                <?php foreach ($direcciones as $id_direccion=>$nombre)
                                    echo '<option value="',$id_direccion,'">',$nombre,'</option>';
                                 ?>                                                                                      
                            </select>
                        </div>
                    </div>                                         
                </div>                
        </form>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-default" data-dismiss="modal">Cancelar</button>
        <button type="button" class="btn btn-primary custom-close" tabindex="3" onclick="saveDeptoEdit()">Guardar Cambios</button>
      </div>
    </div>
  </div>
</div>