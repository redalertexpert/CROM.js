import {IntraRelationshipConstraint} from "crom_l1_composed/IntraRelationshipConstraint";
import {Crom_l1_composedPackageLiterals} from "crom_l1_composed/Crom_l1_composedPackageLiterals";
import {Relationship} from "crom_l1_composed/Relationship";
import {RelationshipConstraintImpl} from "crom_l1_composed/RelationshipConstraintImpl";
import {OrderedSet} from "ecore/OrderedSet";
import {EClass} from "ecore/EClass";
import {NotificationChain} from "ecore/NotificationChain";
import {ENotificationImpl} from "ecore/ENotificationImpl";
import {NotificationImpl} from "ecore/NotificationImpl";
import {InternalEObject} from "ecore/InternalEObject";
import {BasicEObjectImpl} from "ecore/BasicEObjectImpl";
		
			export class IntraRelationshipConstraintBase
			extends RelationshipConstraintImpl
			implements IntraRelationshipConstraint
			{
				private _relation:Relationship = null;
				get relation():Relationship{
				
					return this._relation;
				}
				set relation(value:Relationship) {
					let oldvalue = this._relation;
					this._relation = value;
					if (this.eNotificationRequired()){
						this.eNotify(new ENotificationImpl(this, NotificationImpl.SET,Crom_l1_composedPackageLiterals.INTRA_RELATIONSHIP_CONSTRAINT__RELATION , oldvalue, value));
					}
				}

			
				public static eStaticClass:EClass;
				
				protected eStaticClass():EClass{
					
					return IntraRelationshipConstraintBase.eStaticClass;
				}
			
			
				public basicSetRelation(newobj:Relationship, msgs:NotificationChain):NotificationChain {
					let oldobj = this._relation;
					this._relation = newobj;
					if (this.eNotificationRequired()) {
						let notification = new ENotificationImpl(this, NotificationImpl.SET, Crom_l1_composedPackageLiterals.INTRA_RELATIONSHIP_CONSTRAINT__RELATION, oldobj, newobj);
						if (msgs == null){
							msgs = notification;
						}
						else{
							msgs.add(notification);
						}
					}
					return msgs;
				}
				
			
				public eGet_number_boolean_boolean(featureID:number, resolve:boolean, coreType:boolean):any{
					switch (featureID) {
						case Crom_l1_composedPackageLiterals.INTRA_RELATIONSHIP_CONSTRAINT__RELATION:
							return this.relation;
					}
					//return this.eGetFromRelationshipConstraint(featureID, resolve, coreType);
					return super.eGet(featureID, resolve, coreType);
				}
				
				public eSet_number_any(featureID:number, newValue:any):void {
					switch (featureID) {
						case Crom_l1_composedPackageLiterals.INTRA_RELATIONSHIP_CONSTRAINT__RELATION:
							this.relation = <Relationship> newValue;
							return;
					}
					super.eSet_number_any(featureID, newValue);
				}

				
			}
			
