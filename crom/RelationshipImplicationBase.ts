import {InterRelationshipConstraintImpl} from "crom_l1_composed/InterRelationshipConstraintImpl";
import {Crom_l1_composedPackageLiterals} from "crom_l1_composed/Crom_l1_composedPackageLiterals";
import {RelationshipImplication} from "crom_l1_composed/RelationshipImplication";
import {EClass} from "ecore/EClass";
import {NotificationChain} from "ecore/NotificationChain";
import {ENotificationImpl} from "ecore/ENotificationImpl";
import {NotificationImpl} from "ecore/NotificationImpl";
import {InternalEObject} from "ecore/InternalEObject";
import {BasicEObjectImpl} from "ecore/BasicEObjectImpl";
		
			export class RelationshipImplicationBase
			extends InterRelationshipConstraintImpl
			implements RelationshipImplication
			{

			
				public static eStaticClass:EClass;
				
				protected eStaticClass():EClass{
					
					return RelationshipImplicationBase.eStaticClass;
				}
			
			
			
				public eGet_number_boolean_boolean(featureID:number, resolve:boolean, coreType:boolean):any{
					switch (featureID) {
						case Crom_l1_composedPackageLiterals.RELATIONSHIP_IMPLICATION__FIRST:
							return this.first;
						case Crom_l1_composedPackageLiterals.RELATIONSHIP_IMPLICATION__SECOND:
							return this.second;
					}
					//return this.eGetFromInterRelationshipConstraint(featureID, resolve, coreType);
					return super.eGet(featureID, resolve, coreType);
				}
				
				public eSet_number_any(featureID:number, newValue:any):void {
					switch (featureID) {
					}
					super.eSet_number_any(featureID, newValue);
				}

				
			}
			
