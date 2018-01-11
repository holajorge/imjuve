<div class="wrapper wrapper-content animated fadeInRight">
    <div class="row">
        <div class="col-lg-12">
            <div class="ibox float-e-margins">
                <div class="ibox-content">
                  <div class="table-responsive">
                        <table class="table table-striped table-bordered table-hover dataTables-example" id="tabla_lista_empleados">
                            <thead>
                                <tr>
                                    <th>indicador</th>
                                    <th>Nombre</th>
                                    <th>Tipo</th>                                                
                                </tr>
                            </thead>
                            <tbody>
                            <?php foreach ($deducciones as  $deduccion): ?>                                                                
                                <tr class="gradeA">
                                    <td><?php echo $deduccion->indicador?></td>
                                    <td><?php echo $deduccion->nombre?></td>
                                    <td><?php echo $deduccion->tipo?></td>                                    
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