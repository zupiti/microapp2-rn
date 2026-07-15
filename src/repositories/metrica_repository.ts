import {MetricasService} from '../services/metricas_service';
import type {Metrica} from '../entities';

/**
 * Data layer (`repositories/`).
 * Orchestrates services and normalizes payloads for hooks.
 */
export class MetricasRepository {
  static normalizarListaMetricas(resposta: unknown): Metrica[] {
    if (Array.isArray(resposta)) {
      return resposta as Metrica[];
    }
    const payload = (resposta ?? {}) as {data?: unknown; itens?: unknown};
    if (Array.isArray(payload.data)) {
      return payload.data as Metrica[];
    }
    if (Array.isArray(payload.itens)) {
      return payload.itens as Metrica[];
    }
    return [];
  }

  static extractApiErrorMessage(error: unknown): string {
    if (typeof error === 'string' && error.trim().length > 0) {
      return error.trim();
    }
    if (error instanceof Error) {
      return error.message;
    }
    return 'Não foi possível concluir a operação.';
  }

  static async listarMetricas(): Promise<Metrica[]> {
    const payload = await MetricasService.getMetricasPayload();
    return MetricasRepository.normalizarListaMetricas(payload);
  }

  static async buscarMetricaPorId(metricaId: string): Promise<Metrica> {
    return MetricasService.getMetricaPorId(metricaId);
  }
}
