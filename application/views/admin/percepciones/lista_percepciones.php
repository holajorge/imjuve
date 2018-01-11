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
                                    <td><?php echo $percepcion->indicador?></td>
                                    <td><?php echo $percepcion->nombre?></td>
                                    <td><?php echo $percepcion->tipo?></td>  
                                    <td class="text-center">
                                        <button type="button" class="btn btn-danger" onclick="deletePercepcion('<?php echo $percepcion->id_percepcion ?>')">Eliminar</button>
                                        <a class="btn btn-info" href="$">Editar</a>
                                        <!-- <button class="btn btn-info" onclick="editPErcepcion('<?php echo $percepcion->id_percepcion ?>')">Editar</button>                                                                -->
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