export interface DrivingLicense {
    datawaznosci?: string;
    datawydania?: string;
    id?: string;
    kategoria?: string;
    wojewodztwo?: string;
}
export interface DrivingLicenseListMatch {
    data_do?: string;
    data_od?: string;
    limit?: number;
    page?: number;
    wojewodztwo?: string;
}
export interface Permission {
    datauzyskania?: string;
    id?: string;
    kategoria?: string;
    wojewodztwo?: string;
}
export interface PermissionListMatch {
    data_do?: string;
    data_od?: string;
    limit?: number;
    page?: number;
    wojewodztwo?: string;
}
export interface Statistic {
    liczbapojazdow?: number;
    liczbaprawjazdy?: number;
    wgkategorii?: Record<string, any>;
    wgmarki?: Record<string, any>;
    wgrodzaju?: Record<string, any>;
    wojewodztwo?: string;
}
export interface StatisticLoadMatch {
    rok?: number;
    wojewodztwo?: string;
}
export interface Vehicle {
    datapierwszejrejestracji?: string;
    id?: string;
    marka?: string;
    masawlasna?: number;
    model?: string;
    podrodzaj?: string;
    pojemnoscsilnika?: number;
    rodzaj?: string;
    rokprodukcji?: number;
    wojewodztwo?: string;
}
export interface VehicleListMatch {
    data_do?: string;
    data_od?: string;
    limit?: number;
    page?: number;
    wojewodztwo?: string;
}
