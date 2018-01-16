<div class="wrapper wrapper-content animated fadeInRight">
    <div class="row">
        <div class="col-lg-12">
            <div class="ibox float-e-margins">
                <div class="ibox-content">
                    <div class="table-responsive">
                        <table class="table table-striped table-bordered table-hover dataTables-example" id="tabla_lista_empleados">
                            <thead >
                                <tr>
                                    <th>NO. PLAZA</th>
                                    <th>NOMBRE</th>
                                    <th>AP. PATERNO</th>
                                    <th>AP. MATERNO</th>
                                    <th>FECHA DE INGRESO</th>
                                    <th>DEPARTAMENTO</th>
                                    <th>PUESTO</th>
                                    <th>RFC</th>
                                    <th class="text-center">Acciones</th>
                                </tr>
                            </thead>
                            <tbody>
                                <?php foreach ($empleados as $empleado): ?>
                                    <tr class="gradeX">
                                        <td><label  id="no_plaza<?php echo $empleado->id_empleado ?>"><?php echo  $empleado->no_plaza ?></label></td> 
                                        <td><label  id="nombre_emp<?php echo $empleado->id_empleado ?>"><?php echo $empleado->nombre_emp?></label></td> 
                                        <td><label  id="ap_paterno<?php echo $empleado->id_empleado ?>"><?php echo  $empleado->ap_paterno ?></label></td> 
                                        <td><label  id="ap_materno<?php echo $empleado->id_empleado ?>"><?php echo $empleado->ap_materno?></label></td> 
                                        <td><label  id="fecha_ingreso<?php echo $empleado->id_empleado ?>"><?php echo  $empleado->fecha_ingreso ?></label></td> 
                                        <td><label  id="nombre_depto<?php echo $empleado->id_empleado ?>"><?php echo $empleado->nombre_depto?></label></td> 
                                        <td><label  id="nombre_puesto<?php echo $empleado->id_empleado ?>"><?php echo $empleado->nombre_puesto?></label></td> 
                                        <td><label  id="rfc<?php echo $empleado->id_empleado ?>"><?php echo $empleado->rfc?></label></td>
                                        <td class="text-center">
                                            <button type="button" class="btn btn-danger" onclick="desabilitarEmpleado('<?php echo $empleado->id_empleado ?>')">Desabilitar</button>                                  
                                            <button class="btn btn-info" onclick="editEmpleado('<?php echo $empleado->id_empleado ?>')" data-toggle="modal" data-target="#editarEmpleado">Editar</button>                                                               
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

<div class="modal fade" id="editarEmpleado" role="dialog">
    <div class="modal-dialog modal-lg">
      <div class="modal-content">
        <div class="modal-header">
          <button type="button" class="close" data-dismiss="modal">&times;</button>
          <h4 class="modal-title">Editar Empleado</h4>
        </div>
        <div class="modal-body">
          <p>This is a large modal.</p>
        </div>
        <div class="modal-footer">          
          <button type="button" class="btn btn-default" data-dismiss="modal">Cancelar</button>
          <button type="button" class="btn btn-primary" tabindex="5" onclick="saveDeduccionEdit()">Guardar Cambios</button>
        </div>
      </div>
    </div>
  </div>
</div>