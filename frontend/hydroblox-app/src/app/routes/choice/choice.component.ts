import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DistributorContractService } from 'src/app/shared/contracts/distributorcontract.service';
import { ConsumptionMeterContractService } from 'src/app/shared/contracts/consumptionmetercontract.service';

@Component({
  templateUrl: './choice.component.html',
  styleUrls: ['./choice.component.css']
})
export class ChoiceComponent implements OnInit {

  isConsumptionMeter: boolean = false;
  isProductionMeter: boolean = false;
  isDistributor: boolean = false;
  isAuthority: boolean = false;

  constructor(
    private consumptionMeterContractService: ConsumptionMeterContractService,
    private distributorContractService: DistributorContractService,
    private router: Router) {
  }

  async ngOnInit(): Promise<void> {
    this.isDistributor = await this.distributorContractService.isOwner();
    this.isConsumptionMeter = await this.consumptionMeterContractService.isConsumer();

  }

  async onContinueAsConsumptionMeterClicked() {
    await this.router.navigate(['consumption-meter']);
  }

  async onContinueAsProductionMeterClicked() {
    await this.router.navigate(['production-meter']);
  }

  async onContinueAsDistributorClicked() {
    await this.router.navigate(['distributor']);
  }

  async onContinueAsAuthorityClicked() {
    await this.router.navigate(['authority']);
  }
}
