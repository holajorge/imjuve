<div class="wrapper wrapper-content animated fadeInRight">
    <div class="row">
        <div class="col-lg-12">
            <div class="ibox float-e-margins">
                <div class="ibox-content">
                  <div class="table-responsive">
                        <table class="table table-striped table-bordered table-hover dataTables-example" id="tabla_lista_empleados">
                            <thead>
                                <tr>
                                    <th>Nivel</th>
                                    <th>Nombre</th>                                                                              
                                </tr>
                            </thead>
                            <tbody>
                            <?php foreach ($puestos as  $puesto): ?>                                                                
                                <tr class="gradeA">   
                                    <td><?php echo $puesto->nivel?></td>                                 
                                    <td><?php echo $puesto->nombre?></td>                                
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