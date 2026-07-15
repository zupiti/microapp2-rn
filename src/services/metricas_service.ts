import {ensureHttpClientConfigured, httpClient} from 'shared-rn';
import type {Metrica} from '../entities';

/**
 * HTTP / transport layer (`services/`).
 * Uses shared-rn request core — never raw fetch here.
 */
export class MetricasService {
  static async getMetricasPayload(): Promise<unknown> {
    ensureHttpClientConfigured();
    const response = await httpClient.get<unknown>('/metricas');
    return response.data;
  }

  static async getMetricaPorId(metricaId: string): Promise<Metrica> {
    ensureHttpClientConfigured();
    const response = await httpClient.get<Metrica>(`/metricas/${metricaId}`);
    return response.data;
  }
}
