// ----- this file has been automatically generated - do not edit
import { DataType } from "node-opcua-variant"
import { UABaseInterface, UABaseInterface_Base } from "node-opcua-nodeset-ua/source/ua_base_interface"
import { UABaseDataVariable } from "node-opcua-nodeset-ua/source/ua_base_data_variable"
/**
 * The IWwUnitFlagsType represents the flags of a
 * unit
 *
 * |                |                                                  |
 * |----------------|--------------------------------------------------|
 * |namespace       |http://opcfoundation.org/UA/Woodworking/          |
 * |nodeClass       |ObjectType                                        |
 * |typedDefinition |12:IWwUnitFlagsType ns=12;i=4                     |
 * |isAbstract      |true                                              |
 */
export interface UAIWwUnitFlags_Base extends UABaseInterface_Base {
    /**
     * airPresent
     * The AirPresent Variable is true if the air
     * pressure present in the machine.
     */
    airPresent?: UABaseDataVariable<boolean, /*z*/DataType.Boolean>;
    /**
     * alarm
     * The Alarm Variable is true if at least one alarm
     * exists.
     */
    alarm: UABaseDataVariable<boolean, /*z*/DataType.Boolean>;
    /**
     * calibrated
     * The Calibrated Variable is true if all devices
     * are calibrated.
     */
    calibrated: UABaseDataVariable<boolean, /*z*/DataType.Boolean>;
    /**
     * dustChipSuction
     * The DustChipSuction Variable is true if the dust
     * and chip suction is ready.
     */
    dustChipSuction?: UABaseDataVariable<boolean, /*z*/DataType.Boolean>;
    /**
     * emergency
     * The Emergency Variable is true if at least one
     * emergency button is pressed.
     */
    emergency: UABaseDataVariable<boolean, /*z*/DataType.Boolean>;
    /**
     * energySaving
     * The EnergySaving Variable is true if energy
     * saving is activated on the machine.
     */
    energySaving?: UABaseDataVariable<boolean, /*z*/DataType.Boolean>;
    /**
     * error
     * The Error Variable is true if at least one reason
     * exists which prevents the machine from working.
     */
    error: UABaseDataVariable<boolean, /*z*/DataType.Boolean>;
    /**
     * externalEmergency
     * The ExternalEmergency Variable is true if there
     * is an emergency from the line controller.
     */
    externalEmergency?: UABaseDataVariable<boolean, /*z*/DataType.Boolean>;
    /**
     * feedRuns
     * The FeedRuns Variable is true if the feed is
     * running on a throughfeed machine.
     */
    feedRuns?: UABaseDataVariable<boolean, /*z*/DataType.Boolean>;
    /**
     * hold
     * The Hold Variable is true if the movements are
     * paused by the operator.
     */
    hold?: UABaseDataVariable<boolean, /*z*/DataType.Boolean>;
    loadingEnabled?: UABaseDataVariable<boolean, /*z*/DataType.Boolean>;
    /**
     * machineInitialized
     * The MachineInitialized Variable is true if the
     * MachineOn is true, the plc and the control
     * processes are running. The machine is ready for
     * usage for the operator.
     */
    machineInitialized: UABaseDataVariable<boolean, /*z*/DataType.Boolean>;
    /**
     * machineOn
     * The MachineOn Variable is true if the machine is
     * switched on. If the OPC UA Server runs on the
     * machine this value is always true.
     */
    machineOn: UABaseDataVariable<boolean, /*z*/DataType.Boolean>;
    /**
     * maintenanceRequired
     * The MaintenanceRequired Variable is true if
     * maintenance is required.
     */
    maintenanceRequired?: UABaseDataVariable<boolean, /*z*/DataType.Boolean>;
    /**
     * manualActivityRequired
     * The ManualActivityRequired Variable is true if a
     * manual activity by the operator is required. The
     * RecipeInRun is not affected.
     */
    manualActivityRequired?: UABaseDataVariable<boolean, /*z*/DataType.Boolean>;
    /**
     * moving
     * The Moving Variable is true if at least one axis
     * is moving.
     */
    moving?: UABaseDataVariable<boolean, /*z*/DataType.Boolean>;
    /**
     * powerPresent
     * The PowerPresent Variable is true if 400V are
     * present (the drives are ready to move).
     */
    powerPresent: UABaseDataVariable<boolean, /*z*/DataType.Boolean>;
    /**
     * recipeInHold
     * The RecipeInHold Variable is true if the machine
     * is paused by the program. This is only possible
     * if the RecipeInRun Variable is also true.
     */
    recipeInHold?: UABaseDataVariable<boolean, /*z*/DataType.Boolean>;
    /**
     * recipeInRun
     * The RecipeInRun Variable is true if the machine
     * runs its program. This is only possible if the
     * Error Variable is false. However, if the machine
     * is paused by the program, the machine is
     * considered to still be running its program, i.e.
     * while the RecipeInHold Variable is true, the
     * RecipeInRun cannot be false.
     */
    recipeInRun: UABaseDataVariable<boolean, /*z*/DataType.Boolean>;
    /**
     * recipeInSetup
     * The RecipeInSetup Variable is true if the
     * RecipeInRun is true and the machine is in the
     * setup phase (example: automatic tool change).
     */
    recipeInSetup?: UABaseDataVariable<boolean, /*z*/DataType.Boolean>;
    /**
     * remote
     * The Remote Variable is true if the machine is
     * working with programs sent by the supervisor or
     * other external application.
     */
    remote?: UABaseDataVariable<boolean, /*z*/DataType.Boolean>;
    /**
     * safety
     * The Safety Variable is true if at least one
     * safety device (light curtain, safety mat, b &)
     * has intervened.
     */
    safety?: UABaseDataVariable<boolean, /*z*/DataType.Boolean>;
    /**
     * waitLoad
     * The WaitLoad Variable is true if the machine is
     * waiting for pieces.
     */
    waitLoad?: UABaseDataVariable<boolean, /*z*/DataType.Boolean>;
    /**
     * waitUnload
     * The WaitUnload Variable is true if the machine is
     * waiting to unload pieces.
     */
    waitUnload?: UABaseDataVariable<boolean, /*z*/DataType.Boolean>;
    /**
     * warning
     * The Warning Variable is true if at least one
     * warning exists.
     */
    warning: UABaseDataVariable<boolean, /*z*/DataType.Boolean>;
    /**
     * workpiecePresent
     * The WorkpiecePresent Variable is true if at least
     * one piece is inside the machine.
     */
    workpiecePresent?: UABaseDataVariable<boolean, /*z*/DataType.Boolean>;
}
export interface UAIWwUnitFlags extends UABaseInterface, UAIWwUnitFlags_Base {
}